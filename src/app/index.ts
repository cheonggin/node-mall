import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import type { Context } from 'koa'

import config from './config'
import {
  responseHandler,
  errorHandler
} from '../middleware/response.middleware'
import useRouter from '../router'

const app = new Koa()

// 解析参数
app.use(bodyParser())
// 统一返回格式
app.use(responseHandler())
app.use(errorHandler())
// 路由
useRouter(app)

// 错误处理
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
