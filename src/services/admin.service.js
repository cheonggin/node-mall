const Admin = require('../models/admin.model')

class AdminService {
  async create (ctx) {
    const { name, password, roleId } = ctx.request.body
    const result = await Admin.create({ name, password, roleId })

    return result
  }

  async getUserInfoByName (ctx) {
    const { name } = ctx.request.body

    const result = await Admin.findOne({ name })

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

    const total = await Admin.find(queryCriter).count()
    const list = await Admin.find(queryCriter, { password: 0 }).skip((currentPage - 1) * pageSize).limit(parseInt(pageSize))

    return { total, list }
  }

  async deleteById (ctx) {
    const { id } = ctx.request.params

    const result = await Admin.findOneAndDelete({ _id: id })

    return result
  }

  async updateById (ctx) {
    const { id } = ctx.request.params
    const result = await Admin.findOneAndUpdate({ _id: id }, { $set: ctx.request.body })

    return result
  }
}

module.exports = new AdminService()
