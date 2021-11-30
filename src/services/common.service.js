const mongoose = require('mongoose')

class CommonService {
  async create (ctx) {
    const result = await mongoose.model(ctx.Model).create(ctx.request.body)

    return result
  }

  async getUserInfoByName (ctx) {
    const { username } = ctx.request.body
    const result = await mongoose.model(ctx.Model).findOne({ username })

    return result
  }

  async getList (ctx) {
    const { query, pageSize, currentPage } = ctx.request.query

    let queryCriter
    if (query) {
      if (ctx.Model === 'User' || ctx.Model === 'Admin') {
        queryCriter = {
          username: { $regex: query, $options: '$i' }
        }
      } else {
        queryCriter = {
          name: { $regex: query, $options: '$i' }
        }
      }
    } else {
      queryCriter = {}
    }

    const total = await mongoose.model(ctx.Model).find(queryCriter).count()
    const list = await mongoose
      .model(ctx.Model)
      .find(queryCriter, { password: 0 })
      .skip((currentPage - 1) * pageSize)
      .limit(parseInt(pageSize))

    return { total, list }
  }
}

module.exports = new CommonService()
