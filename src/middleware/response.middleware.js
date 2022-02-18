module.exports = () => {
  return async (ctx, next) => {
    ctx.res.fail = ({ status, code, msg }) => {
      ctx.status = status
      ctx.body = { code, msg }
    }

    ctx.res.success = msg => {
      ctx.body = {
        code: 0,
        data: ctx.body,
        msg: msg || 'success'
      }
    }

    await next()
  }
}
