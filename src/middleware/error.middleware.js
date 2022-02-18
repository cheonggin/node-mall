module.exports = () => {
  return async (ctx, next) => {
    try {
      await next()
      if (ctx.status === 200) {
        ctx.res.success()
      }
    } catch (error) {
      if (error.code) {
        // 主动抛出的错误
        ctx.res.fail({
          status: error.status,
          code: error.code,
          msg: error.message
        })
      } else {
        // 程序运行时抛出的错误
        ctx.app.emit('error', error, ctx)
      }
    }
  }
}
