const Router = require('koa-router')

const adminController = require('../controller/admin.controller')
const {
  verifyAdmin,
  passwordHandler
} = require('../middleware/admin.middleware')
const { verifyAuth } = require('../middleware/auth.middleware')

const adminRouter = new Router({ prefix: '/admin' })

adminRouter.post('/', verifyAdmin, passwordHandler, adminController.create)
adminRouter.get('/', verifyAuth, adminController.getList)

module.exports = adminRouter
