import type Koa from 'koa'
import adminRouter from './admin.router'

const routers = [adminRouter]

export default (app: Koa) => {
  routers.forEach(router => {
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}
