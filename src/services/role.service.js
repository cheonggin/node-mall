const Role = require('../models/role.model')

class RoleService {
  async create (ctx) {
    const { name, desc, permissionList } = ctx.request.body
    const result = await Role.create({ name, desc, permissionList })

    return result
  }

  async getList (ctx) {
    let queryCriter
    const { query, pageSize, currentPage } = ctx.request.query

    // 如果有搜索查询关键字
    if (query) {
      queryCriter = {
        name: { $regex: query, $options: '$i' }
      }
    } else {
      queryCriter = {}
    }

    const total = await Role.find(queryCriter).count()
    const list = await Role.find(queryCriter).skip((currentPage - 1) * pageSize).limit(parseInt(pageSize))

    return { total, list, page: { pageSize, currentPage } }
  }

  async deleteById (ctx) {
    const { id } = ctx.request.params

    const result = await Role.findOneAndDelete({ _id: id })

    return result
  }

  async updateById (ctx) {
    const { id } = ctx.request.params
    const result = await Role.findOneAndUpdate({ _id: id }, { $set: ctx.request.body })

    return result
  }
}

module.exports = new RoleService()
