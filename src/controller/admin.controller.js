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
}

module.exports = new AdminController()
