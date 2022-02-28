import type Koa from 'koa'

import adminRouter from './admin.router'
import authRouter from './auth.router'
import menuRouter from './menu.router'

const routers = [adminRouter, authRouter, menuRouter]

export default (app: Koa) => {
  routers.forEach(router => {
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}
