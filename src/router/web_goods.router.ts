import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import goodsController from '../controller/goods.controller'

const webGoodsRouter = new Router<DefaultState, Context>({
  prefix: '/page/goods'
})

webGoodsRouter.get('/', goodsController.getList)
webGoodsRouter.get('/:id', goodsController.getGoodsInfoList)

export default webGoodsRouter
