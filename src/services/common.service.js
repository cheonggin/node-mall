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
}

module.exports = new CommonService()
