const bcrypt = require('bcrypt')

const commonService = require('../services/common.service')
const {
  USER_ALREADY_EXISTS,
  USER_DOES_NOT_EXISTS,
  PASSWORD_IS_INCORRECT
} = require('../constant/error-type')

// 使用通用CRUD接口时，将对应模型名称挂载到ctx对象上
const setModelName = async (ctx, next) => {
  const inflection = require('inflection')

  const { resource } = ctx.params
  ctx.Model = inflection.classify(resource)

  await next()
}

// 验证用户是否注册过
const verifyUser = async (ctx, next) => {
  const { resource } = ctx.params

  if (resource === 'users' || resource === 'admin') {
    const user = await commonService.getUserInfoByName(ctx)
    if (user) {
      return ctx.app.emit('error', USER_ALREADY_EXISTS, ctx)
    }
  }

  await next()
}

// 验证登录信息是否匹配
const verifyLogin = async (ctx, next) => {
  const { password } = ctx.request.body

  const user = await commonService.getUserInfoByName(ctx)
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

module.exports = { setModelName, verifyUser, verifyLogin }
