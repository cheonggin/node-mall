const bcrypt = require('bcrypt')

const adminServices = require('../services/admin.services')
const { USER_ALREADY_EXISTS, USER_DOES_NOT_EXISTS, PASSWORD_IS_INCORRECT } = require('../constant/error-type')

const verifyUser = async (ctx, next) => {
  const { admin_name } = ctx.request.body

  // 验证用户是否注册过
  const user = await adminServices.getUserInfoByName(admin_name)
  if (user) {
    return ctx.app.emit('error', USER_ALREADY_EXISTS, ctx)
  }

  await next()
}

const verifyLogin = async (ctx, next) => {
  const { admin_name, password } = ctx.request.body

  const user = await adminServices.getUserInfoByName(admin_name)
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
