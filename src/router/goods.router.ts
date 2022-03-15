import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import goodsController from '../controller/goods.controller'
import { verifyAuth } from '../middleware/auth.middleware'

const goodsRouter = new Router<DefaultState, Context>({
  prefix: '/goods'
})

goodsRouter.post('/', verifyAuth, goodsController.create)
goodsRouter.get('/', verifyAuth, goodsController.getList)
goodsRouter.put('/:id', verifyAuth, goodsController.updateById)
goodsRouter.delete('/:id', verifyAuth, goodsController.deleteById)

export default goodsRouter
