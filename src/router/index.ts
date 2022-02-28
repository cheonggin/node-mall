import type Koa from 'koa'

import adminRouter from './admin.router'
import authRouter from './auth.router'

const routers = [adminRouter, authRouter]

export default (app: Koa) => {
  routers.forEach(router => {
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}
