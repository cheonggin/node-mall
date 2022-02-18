const Router = require('koa-router')
const adminController = require('../controller/admin.controller')
const { verifyAdmin } = require('../middleware/admin.middleware')

const adminRouter = new Router({ prefix: '/admin' })

adminRouter.post('/', verifyAdmin, adminController.create)

module.exports = adminRouter
