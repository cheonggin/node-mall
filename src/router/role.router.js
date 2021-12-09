const Router = require('koa-router')

const roleController = require('../controllers/role.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = new Router()

router.post('/role', authMiddleware, roleController.create)

router.get('/role/list', authMiddleware, roleController.getList)

router.delete('/role/:id', authMiddleware, roleController.deleteById)

router.patch('/role/:id', authMiddleware, roleController.updateById)

module.exports = router
