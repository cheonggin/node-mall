const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const adminService = require('../service/admin.service')
const errorTypes = require('../constant/error-types')
const { PUBLIC_KEY } = require('../app/config')

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body

  ctx.utils.assert(name, 400, errorTypes.userFormatError)
  ctx.utils.assert(password, 400, errorTypes.userFormatError)

  const result = await adminService.findUserByName(name)
  const user = result[0]
  ctx.utils.assert(user, 400, errorTypes.userDoesNotExists)

  // 用户存在则验证密码是否一致
  const isValid = bcrypt.compareSync(password, user.password)
  ctx.utils.assert(isValid, 400, errorTypes.passwordIsIncorrect)
  ctx.user = user

  await next()
}

// token验证
const verifyAuth = async (ctx, next) => {
  const { authorization } = ctx.headers

  ctx.utils.assert(authorization, 401, errorTypes.tokenExpiredError)

  const token = authorization.split(' ').pop()

  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256']
    })
    ctx.user = result
  } catch (error) {
    ctx.utils.assert('', 401, errorTypes.tokenExpiredError)
  }

  await next()
}

module.exports = { verifyLogin, verifyAuth }
