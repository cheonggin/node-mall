import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import categoryController from '../controller/category.controller'
import { verifyAuth } from '../middleware/auth.middleware'

const categoryRouter = new Router<DefaultState, Context>({
  prefix: '/category'
})

categoryRouter.post('/', verifyAuth, categoryController.create)
categoryRouter.get('/', verifyAuth, categoryController.getList)
categoryRouter.put('/:id', verifyAuth, categoryController.updateById)
categoryRouter.delete('/:id', verifyAuth, categoryController.deleteById)

export default categoryRouter
