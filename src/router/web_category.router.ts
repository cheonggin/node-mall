import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import categoryController from '../controller/category.controller'

const webCategoryRouter = new Router<DefaultState, Context>({
  prefix: '/page/category'
})

webCategoryRouter.get('/', categoryController.getCategoryList)
webCategoryRouter.get('/:id', categoryController.getSubCategoryList)

export default webCategoryRouter
