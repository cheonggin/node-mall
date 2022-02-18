const Router = require('koa-router')

const adminController = require('../controller/admin.controller')
const {
  verifyAdmin,
  passwordHandler
} = require('../middleware/admin.middleware')

const adminRouter = new Router({ prefix: '/admin' })

adminRouter.post('/', verifyAdmin, passwordHandler, adminController.create)

module.exports = adminRouter
