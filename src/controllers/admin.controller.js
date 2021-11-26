const jwt = require('jsonwebtoken')

const adminService = require('../services/admin.services')
const { USER_REGISTER_ERROR } = require('../constant/error-type')
const { PUBLIC_KEY } = require('../app/config')

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

  async login (ctx) {
    const { admin_name } = ctx.request.body
    const user = await adminService.getUserInfoByName(admin_name)

    // 生成token并返回
    const token = jwt.sign({ id: user._id }, PUBLIC_KEY, {
      expiresIn: '30d'
    })

    ctx.body = {
      code: 0,
      message: '登录成功',
      result: {
        token,
        userinfo: {
          admin_name: user.admin_name,
          is_amdin: user.is_admin
        }
      }
    }
  }
}

module.exports = new AdminController()
