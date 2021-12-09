const Router = require('koa-router')

const adminController = require('../controllers/admin.controller')
const {
  verifyUser,
  verifyLogin
} = require('../middleware/admin.middleware')
const authMiddleware = require('../middleware/auth.middleware')

const router = new Router()

router.post('/admin', authMiddleware, verifyUser, adminController.create)

router.post('/login', verifyLogin, adminController.login)

router.get('/admin/list', authMiddleware, adminController.getList)

router.delete('/admin/:id', authMiddleware, adminController.deleteById)

router.patch('/admin/:id', authMiddleware, adminController.updateById)

module.exports = router
