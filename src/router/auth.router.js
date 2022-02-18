const Router = require('koa-router')

const authController = require('../controller/auth.controller')
const { verifyLogin } = require('../middleware/auth.middleware')

const authRouter = new Router({ prefix: '/login' })

// 管理员登录
authRouter.post('/admin', verifyLogin, authController.login)

module.exports = authRouter
