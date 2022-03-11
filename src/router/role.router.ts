import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import roleController from '../controller/role.controller'
import { verifyAuth } from '../middleware/auth.middleware'

const roleRouter = new Router<DefaultState, Context>({ prefix: '/role' })

roleRouter.post('/', verifyAuth, roleController.create)
roleRouter.get('/', verifyAuth, roleController.getList)
roleRouter.put('/:id', verifyAuth, roleController.updateById)
roleRouter.delete('/:id', verifyAuth, roleController.deleteById)

export default roleRouter
