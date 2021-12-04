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

    if (ctx.Model === 'Category') {
      return this.getCategoryList(ctx)
    }
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

  async getCategoryList (ctx) {
    const parents = await mongoose.model(ctx.Model).find().where({
      parent: null
    }).lean()

    for (let i = 0; i < parents.length; i++) {
      parents[i].children = await mongoose.model(ctx.Model).aggregate([
        { $match: { parent: parents[i]._id } },
        {
          $lookup: {
            from: 'Category',
            localField: '_id',
            foreignField: 'parent',
            as: 'children'
          }
        }
      ])

      const lenth = parents[i].children.length

      for (let j = 0; j < lenth; j++) {
        (parents[i].children)[j].children = await mongoose.model(ctx.Model).aggregate([
          { $match: { parent: (parents[i].children)[j]._id } },
          {
            $lookup: {
              from: 'Category',
              localField: '_id',
              foreignField: 'parent',
              as: 'children'
            }
          }
        ])
      }
    }
    return { list: parents, total: parents.length }
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
