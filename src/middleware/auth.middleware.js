const jwt = require('jsonwebtoken')

const { PUBLIC_KEY } = require('../app/config')
const { UNAUTHORIZATION } = require('../constant/error-type')

module.exports = async (ctx, next) => {
  const { authorization } = ctx.request.headers
  const token = authorization.split(' ').slice().pop()

  try {
    const result = jwt.verify(token, PUBLIC_KEY)

    ctx.user = result
    await next()
  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', UNAUTHORIZATION, ctx)
  }
}
