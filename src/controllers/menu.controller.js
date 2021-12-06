const menuService = require('../services/menu.service')

class MenuController {
  async create (ctx) {
    // 插入数据到数据库中
    await menuService.create(ctx)

    ctx.body = {
      code: 0,
      message: '添加成功',
      data: ''
    }
  }

  async getList (ctx) {
    const result = await menuService.getList(ctx)

    ctx.body = {
      code: 0,
      message: 'success',
      data: result
    }
  }

  async deleteById (ctx) {
    const result = await menuService.deleteById(ctx)

    ctx.body = {
      code: 0,
      message: '删除成功',
      data: result
    }
  }

  async updateById (ctx) {
    await menuService.updateById(ctx)

    ctx.body = {
      code: 0,
      message: '修改成功'
    }
  }
}

module.exports = new MenuController()
