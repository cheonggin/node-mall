import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import adminController from '../controller/admin.controller'
import { verifyAdmin, passwordHandler } from '../middleware/admin.middleware'

const adminRouter = new Router<DefaultState, Context>({ prefix: '/admin' })

adminRouter.post('/', verifyAdmin, passwordHandler, adminController.create)

export default adminRouter
