const Router = require('koa-router')
const adminController = require('../controllers/admin.controller')
const verifyUser = require('../middleware/admin.middleware')

const router = new Router()

router.post('/admin', verifyUser, adminController.create)

module.exports = router
