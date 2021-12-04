const mongoose = require('mongoose')

class CommonService {
  async create (ctx) {
    const result = await mongoose.model(ctx.Model).create(ctx.request.body)

    return result
  }

  async getUserInfoByName (ctx) {
    const { name } = ctx.request.body

    if (name) {
      const result = await mongoose.model(ctx.Model).findOne({ name })
      return result
    }
  }

  async getList (ctx) {
    let queryCriter
    let { query, pageSize, currentPage } = ctx.request.query
    pageSize = pageSize || 5
    currentPage = currentPage || 1

    // 如果有搜索查询关键字
    if (query) {
      queryCriter = {
        name: { $regex: query, $options: '$i' }
      }
    } else {
      queryCriter = {}
    }

    const queryOptions = {}
    if (ctx.Model === 'Admin') {
      queryOptions.populate = 'roleId'
    }

    const total = await mongoose.model(ctx.Model).find(queryCriter).count()
    const list = await mongoose
      .model(ctx.Model)
      .find(queryCriter, { password: 0 })
      .skip((currentPage - 1) * pageSize)
      .limit(parseInt(pageSize)).setOptions(queryOptions)

    return { total, list }
  }

  async deleteDataById (ctx) {
    const { id } = ctx.request.params
    const result = await mongoose.model(ctx.Model).findByIdAndDelete({ _id: id })

    return result
  }

  async updateDataById (ctx) {
    const { id } = ctx.request.params
    await mongoose.model(ctx.Model).findOneAndUpdate({ _id: id }, { $set: ctx.request.body })
  }
}

module.exports = new CommonService()
