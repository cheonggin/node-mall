const Router = require('koa-router')

const menuController = require('../controller/menu.controller')
const { verifyAuth } = require('../middleware/auth.middleware')

const menuRouter = new Router({ prefix: '/menu' })

menuRouter.post('/', verifyAuth, menuController.create)
menuRouter.get('/', verifyAuth, menuController.getList)

module.exports = menuRouter
