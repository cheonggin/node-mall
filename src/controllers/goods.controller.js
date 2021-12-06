const goodsService = require('../services/goods.service')

class GoodsController {
  async create (ctx) {
    // 插入数据到数据库中
    await goodsService.create(ctx)

    ctx.body = {
      code: 0,
      message: '添加成功',
      data: ''
    }
  }

  async getList (ctx) {
    const result = await goodsService.getList(ctx)

    ctx.body = {
      code: 0,
      message: 'success',
      data: result
    }
  }

  async deleteById (ctx) {
    const result = await goodsService.deleteById(ctx)

    ctx.body = {
      code: 0,
      message: '删除成功',
      data: result
    }
  }

  async updateById (ctx) {
    await goodsService.updateById(ctx)

    ctx.body = {
      code: 0,
      message: '修改成功'
    }
  }
}

module.exports = new GoodsController()
