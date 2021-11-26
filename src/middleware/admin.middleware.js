const adminServices = require('../services/admin.services')
const { USER_ALREADY_EXISTS } = require('../constant/error-type')

const verifyUser = async (ctx, next) => {
  const { admin_name } = ctx.request.body

  // 验证用户是否注册过
  const result = await adminServices.getUserInfoByName(admin_name)
  if (result.length !== 0) {
    return ctx.app.emit('error', USER_ALREADY_EXISTS, ctx)
  }

  await next()
}

module.exports = verifyUser
