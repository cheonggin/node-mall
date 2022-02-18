const adminService = require('../service/admin.service')
const errorTypes = require('../constant/error-types')

class AdminController {
  async create(ctx, next) {
    const user = ctx.request.body

    try {
      const result = await adminService.create(user)
      ctx.body = result
    } catch (error) {
      ctx.utils.assert('', 400, errorTypes.userRegisterError)
    }
  }

  async getList(ctx, next) {
    const { offset, limit } = ctx.query
    const result = await adminService.getList(offset, limit)

    ctx.body = result
  }

  async deleteById(ctx, next) {
    const { id } = ctx.params
    const result = await adminService.deleteById(id)

    ctx.body = result
  }
}

module.exports = new AdminController()
