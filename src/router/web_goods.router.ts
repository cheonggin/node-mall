import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import goodsController from '../controller/goods.controller'

const webGoodsRouter = new Router<DefaultState, Context>({
  prefix: '/page/goods'
})

webGoodsRouter.get('/', goodsController.getList)

export default webGoodsRouter
