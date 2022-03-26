import Router from 'koa-router'

import type { Context, DefaultState } from 'koa'

import keywordController from '../controller/keyword.controller'

const keywordRouter = new Router<DefaultState, Context>({
  prefix: '/page/keyword'
})

keywordRouter.get('/', keywordController.getKeyWordList)

export default keywordRouter
