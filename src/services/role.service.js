const Role = require('../models/role.model')

class RoleService {
  async create (ctx) {
    const { name, desc } = ctx.request.body
    const result = await Role.create({ name, desc })

    return result
  }

  async getList (ctx) {
    let queryCriter
    const { query, pageSize, currentPage } = ctx.request.query

    if (!pageSize || !currentPage) {
      throw new Error('params is incorrect')
    }

    // 如果有搜索查询关键字
    if (query) {
      queryCriter = {
        name: { $regex: query, $options: '$i' }
      }
    } else {
      queryCriter = {}
    }

    const total = await Role.find(queryCriter).count()
    const list = await Role.find(queryCriter, { password: 0 }).skip((currentPage - 1) * pageSize).limit(parseInt(pageSize))

    return { total, list }
  }

  async deleteById (ctx) {
    const { id } = ctx.request.params

    const result = await Role.remove({ _id: id })

    return result
  }

  async updateById (ctx) {
    const { id } = ctx.request.params
    const result = await Role.findOneAndUpdate({ _id: id }, { $set: ctx.request.body })

    return result
  }
}

module.exports = new RoleService()
