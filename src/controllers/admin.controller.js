const adminService = require('../services/admin.services')
const { USER_REGISTER_ERROR } = require('../constant/error-type')

class AdminController {
  async create (ctx) {
    const { admin_name, password } = ctx.request.body

    // 插入数据到数据库中
    try {
      const result = await adminService.create(admin_name, password)
      ctx.body = {
        code: 0,
        message: '注册成功',
        data: { admin_name: result.admin_name }
      }
    } catch (error) {
      ctx.app.emit('error', USER_REGISTER_ERROR, ctx)
    }
  }
}

module.exports = new AdminController()
