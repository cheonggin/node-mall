const bcrypt = require('bcrypt')

const errorTypes = require('../constant/error-types')
const adminService = require('../service/admin.service')

const verifyAdmin = async (ctx, next) => {
  const { name, password } = ctx.request.body

  // 验证名称与密码是否为空
  ctx.utils.assert(name, 400, errorTypes.userFormatError)
  ctx.utils.assert(password, 400, errorTypes.userFormatError)
  // 验证名称是否已注册
  const user = await adminService.findUserByName(name)
  ctx.utils.assert(!user.length, 409, errorTypes.userAlreadyExists)

  await next()
}

const passwordHandler = async (ctx, next) => {
  const { password } = ctx.request.body

  const result = bcrypt.hashSync(password, 8)
  ctx.request.body.password = result

  await next()
}

module.exports = { verifyAdmin, passwordHandler }
