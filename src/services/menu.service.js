const Menu = require('../models/menu.model')

class MenuService {
  async create (ctx) {
    const { name, type, path, status, parent } = ctx.request.body
    const result = await Menu.create({ name, type, path, status, parent })

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

    const total = await Menu.find(queryCriter).where({ parent: null }).lean().count()
    const parents = await Menu.find(queryCriter).where({ parent: null }).lean().skip((currentPage - 1) * pageSize).limit(parseInt(pageSize))

    for (let i = 0; i < parents.length; i++) {
      parents[i].children = await Menu.aggregate([
        { $match: { parent: parents[i]._id } },
        {
          $lookup: {
            from: 'Menu',
            localField: '_id',
            foreignField: 'parent',
            as: 'children'
          }
        }
      ])

      const len = parents[i].children.length

      for (let j = 0; j < len; j++) {
        (parents[i].children)[j].children = await await Menu.aggregate([
          { $match: { parent: (parents[i].children)[j]._id } },
          {
            $lookup: {
              from: 'Menu',
              localField: '_id',
              foreignField: 'parent',
              as: 'children'
            }
          }
        ])
      }
    }

    return { total, list: parents }
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
}

module.exports = new MenuService()
