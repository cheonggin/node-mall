import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import config from './config'
import {
  responseHandler,
  errorHandler
} from '../middleware/response.middleware'
import useRouter from '../router'
import otherErrorHandler from './error-handle'

const app = new Koa()

// 解析参数
app.use(bodyParser())
// 统一返回格式
app.use(responseHandler())
app.use(errorHandler())
useRouter(app)

// 错误处理
app.on('error', otherErrorHandler)

app.listen(config.APP_PORT, () =>
  console.log(`API is listening on ${config.APP_HOST}:${config.APP_PORT}`)
)

export default app
