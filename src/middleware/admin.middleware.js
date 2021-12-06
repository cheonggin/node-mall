const bcrypt = require('bcrypt')

const adminService = require('../services/admin.service')
const {
  USER_ALREADY_EXISTS,
  USER_DOES_NOT_EXISTS,
  PASSWORD_IS_INCORRECT
} = require('../constant/error-type')

// 验证用户是否注册过
const verifyUser = async (ctx, next) => {
  const user = await adminService.getUserInfoByName(ctx)
  if (user) {
    return ctx.app.emit('error', USER_ALREADY_EXISTS, ctx)
  }

  await next()
}

// 验证登录信息是否匹配
const verifyLogin = async (ctx, next) => {
  const { password } = ctx.request.body

  const user = await adminService.getUserInfoByName(ctx)
  // 用户不存在
  if (!user) {
    return ctx.app.emit('error', USER_DOES_NOT_EXISTS, ctx)
  }

  // 用户存在则验证密码是否匹配
  const isValid = bcrypt.compareSync(password, user.password)
  if (!isValid) {
    return ctx.app.emit('error', PASSWORD_IS_INCORRECT, ctx)
  }

  await next()
}

module.exports = { verifyUser, verifyLogin }
