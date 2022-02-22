import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import authController from '../controller/auth.controller'
import { verifyLogin } from '../middleware/auth.middleware'

const authRouter = new Router<DefaultState, Context>({ prefix: '/login' })

authRouter.post('/admin', verifyLogin, authController.adminLogin)

export default authRouter
