const categoryService = require('../services/category.service')

class CategoryController {
  async create (ctx) {
    // 插入数据到数据库中
    await categoryService.create(ctx)

    ctx.body = {
      code: 0,
      message: '添加成功',
      data: ''
    }
  }

  async getList (ctx) {
    const result = await categoryService.getList(ctx)

    ctx.body = {
      code: 0,
      message: 'success',
      data: result
    }
  }

  async deleteById (ctx) {
    const result = await categoryService.deleteById(ctx)

    ctx.body = {
      code: 0,
      message: '删除成功',
      data: result
    }
  }

  async updateById (ctx) {
    await categoryService.updateById(ctx)

    ctx.body = {
      code: 0,
      message: '修改成功'
    }
  }
}

module.exports = new CategoryController()
