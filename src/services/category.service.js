const Category = require('../models/category.model')

class CategoryService {
  async create (ctx) {
    const { name, parent } = ctx.request.body
    const result = await Category.create({ name, parent })

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

    const total = await Category.find(queryCriter).where({ parent: null }).lean().count()
    const parents = await Category.find(queryCriter).where({ parent: null }).lean().skip((currentPage - 1) * pageSize).limit(parseInt(pageSize))

    for (let i = 0; i < parents.length; i++) {
      parents[i].children = await Category.aggregate([
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
    }

    return { total, list: parents }
  }

  async deleteById (ctx) {
    const { id } = ctx.request.params

    const result = await Category.remove({ _id: id })

    return result
  }

  async updateById (ctx) {
    const { id } = ctx.request.params
    const result = await Category.findOneAndUpdate({ _id: id }, { $set: ctx.request.body })

    return result
  }
}

module.exports = new CategoryService()
