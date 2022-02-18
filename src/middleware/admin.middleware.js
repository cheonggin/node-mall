const errorTypes = require('../constant/error-types')

const verifyAdmin = async (ctx, next) => {
  const { name, password } = ctx.request.body

  ctx.utils.assert(name, 400, errorTypes.userFormatError)
  ctx.utils.assert(password, 400, errorTypes.userFormatError)

  await next()
}

module.exports = { verifyAdmin }
