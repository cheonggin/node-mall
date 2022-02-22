import type { Context, Next } from 'koa'
import type { FailParams } from '../types'

export const responseHandler = () => {
  return async (ctx: Context, next: Next) => {
    ctx.success = (msg?: string) => {
      ctx.body = {
        code: 0,
        data: ctx.body,
        msg: msg || 'success'
      }
    }

    ctx.fail = (opt: FailParams) => {
      ctx.status = opt.status
      ctx.body = { code: opt.code, msg: opt.message }
    }

    await next()
  }
}

export const errorHandler = () => {
  return async (ctx: Context, next: Next) => {
    try {
      await next()
      if (ctx.status === 200) {
        ctx.success()
      }
    } catch (error) {
      const err = error as FailParams

      if (err.code) {
        // 主动抛出的错误
        ctx.fail({
          status: err.status,
          code: err.code,
          message: err.message
        })
      } else {
        // 程序运行时抛出的错误
        ctx.app.emit('error', error, ctx)
      }
    }
  }
}
