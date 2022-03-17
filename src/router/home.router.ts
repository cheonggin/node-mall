import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import homeController from '../controller/home.controller'

const homeRouter = new Router<DefaultState, Context>({
  prefix: '/page/home'
})

homeRouter.get('/', homeController.getList)

export default homeRouter
