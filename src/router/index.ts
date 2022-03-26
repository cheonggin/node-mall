import type Koa from 'koa'

import adminRouter from './admin.router'
import authRouter from './auth.router'
import menuRouter from './menu.router'
import roleRouter from './role.router'
import categoryRouter from './category.router'
import goodsRouter from './goods.router'
import homeRouter from './home.router'
import webCategoryRouter from './web_category.router'
import keywordRouter from './keyword.router'

const routers = [
  adminRouter,
  authRouter,
  menuRouter,
  roleRouter,
  categoryRouter,
  goodsRouter,
  homeRouter,
  webCategoryRouter,
  keywordRouter
]

export default (app: Koa) => {
  routers.forEach(router => {
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}
