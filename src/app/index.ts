import Koa from 'koa'

import type { Context } from 'koa'

import config from './config'
import {
  responseHandler,
  errorHandler
} from '../middleware/response.middleware'

const app = new Koa()

app.use(responseHandler())
app.use(errorHandler())

app.on('error', (err: any, ctx: Context) => {
  if (ctx) {
    ctx.status = 500
    ctx.body = {
      code: 9999,
      message: `程序运行时报错：${err.message}`
    }
  }
})

app.listen(config.APP_PORT, () =>
  console.log(`API is listening on ${config.APP_HOST}:${config.APP_PORT}`)
)

export default app
