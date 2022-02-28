import type { Context } from 'koa'
import errorTypes from '../constant/error-types'

const otherErrorHandler = (error: any, ctx: Context) => {
  let status

  switch (error.code) {
    case errorTypes.paramsError.code:
      status = 400
      break
    case errorTypes.tokenExpiredError.code:
      status = 401
      break
    default:
      status = 500
  }

  ctx.status = status
  ctx.body = {
    code: error.code || 9999,
    message: error.message
  }
}

export default otherErrorHandler
