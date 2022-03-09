import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import menuController from '../controller/menu.controller'
import { verifyAuth } from '../middleware/auth.middleware'

const menuRouter = new Router<DefaultState, Context>({ prefix: '/menu' })

menuRouter.post('/', verifyAuth, menuController.create)
menuRouter.get('/', verifyAuth, menuController.getList)
menuRouter.put('/:id', verifyAuth, menuController.updateById)
menuRouter.delete('/:id', verifyAuth, menuController.deleteById)

export default menuRouter
