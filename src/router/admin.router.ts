import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import adminController from '../controller/admin.controller'
import { verifyAdmin, passwordHandler } from '../middleware/admin.middleware'
import { verifyAuth } from '../middleware/auth.middleware'

const adminRouter = new Router<DefaultState, Context>({ prefix: '/admin' })

adminRouter.post('/', verifyAdmin, passwordHandler, adminController.create)
adminRouter.get('/', verifyAuth, adminController.getList)

export default adminRouter
