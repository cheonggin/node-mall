import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import menuController from '../controller/menu.controller'
import { verifyAuth } from '../middleware/auth.middleware'

const menuRouter = new Router<DefaultState, Context>({ prefix: '/menu' })

menuRouter.post('/', verifyAuth, menuController.create)

export default menuRouter
