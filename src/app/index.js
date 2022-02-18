const Koa = require('koa')
const bodyparser = require('koa-bodyparser')

const useRouter = require('../router')
const responseMiddleware = require('../middleware/response.middleware')
const errorMiddleware = require('../middleware/error.middleware')
const utils = require('../common/utils')

const app = new Koa()

app.context.utils = utils
app.use(bodyparser())
app.use(responseMiddleware())
app.use(errorMiddleware())
useRouter(app)

app.on('error', (err, ctx) => {
  if (ctx) {
    ctx.status = 500
    ctx.body = {
      code: 9999,
      message: `程序运行时报错：${err.message}`
    }
  }
})

module.exports = app
