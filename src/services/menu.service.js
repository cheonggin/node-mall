const Menu = require('../models/menu.model')
const Role = require('../models/role.model')

class MenuService {
  async create (ctx) {
    const { name, type, path, status, parent, component, icon } = ctx.request.body
    const result = await Menu.create({ name, type, path, status, parent, component, icon })

    return result
  }

  async getList (ctx) {
    let queryCriter
    const { query } = ctx.request.query

    // 如果有搜索查询关键字
    if (query) {
      queryCriter = {
        name: { $regex: query, $options: '$i' }
      }
    } else {
      queryCriter = {}
    }

    const total = await Menu.find(queryCriter).count()
    const parents = await Menu.find(queryCriter)
    const list = getTreeMenu(parents, [], null)

    return { total, list }
  }

  async deleteById (ctx) {
    const { id } = ctx.request.params

    const result = await Menu.findOneAndDelete({ _id: id })
    await Menu.deleteMany({ parent: { $all: [id] } })

    return result
  }

  async updateById (ctx) {
    const { id } = ctx.request.params
    const result = await Menu.findOneAndUpdate({ _id: id }, { $set: ctx.request.body })

    return result
  }

  async getMenuListByRoleId (roleId) {
    const [{ permissionList }] = await Role.find({ _id: roleId })
    const permList = [
      ...permissionList.checkedKeys,
      ...permissionList.halfCheckedKeys
    ]

    const result = await Menu.find({ _id: { $in: permList } }).sort({ _id: -1 })
    const list = getTreeMenu(result, [], null)

    return list
  }
}

// 递归拼接树形列表
function getTreeMenu (data, result, pid) {
  for (const item of data) {
    if (String(item.parent.slice().pop()) === String(pid)) {
      const newItem = { ...item._doc, children: [] }
      result.push(newItem)
      getTreeMenu(data, newItem.children, item._id)
    }
  }
  return result
}

module.exports = new MenuService()
