const Goods = require('../models/goods.model')

class GoodsService {
  async create (ctx) {
    const { name, parent, link, price, desc } = ctx.request.body
    const result = await Goods.create({ name, parent, link, price, desc })

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

    const total = await Goods.find(queryCriter).count()
    const list = await Goods.find(queryCriter, { password: 0 }).skip((currentPage - 1) * pageSize).limit(parseInt(pageSize))

    return { total, list }
  }

  async deleteById (ctx) {
    const { id } = ctx.request.params

    const result = await Goods.findOneAndDelete({ _id: id })

    return result
  }

  async updateById (ctx) {
    const { id } = ctx.request.params
    const result = await Goods.findOneAndUpdate({ _id: id }, { $set: ctx.request.body })

    return result
  }
}

module.exports = new GoodsService()
