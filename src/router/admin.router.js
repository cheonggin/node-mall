const Router = require('koa-router')
const adminController = require('../controllers/admin.controller')
const { verifyUser, verifyLogin } = require('../middleware/admin.middleware')

const router = new Router()

router.post('/admin', verifyUser, adminController.create)

router.post('/login', verifyLogin, adminController.login)

module.exports = router
