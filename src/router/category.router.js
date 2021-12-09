const Router = require('koa-router')

const categoryController = require('../controllers/category.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = new Router()

router.post('/category', authMiddleware, categoryController.create)

router.get('/category/list', authMiddleware, categoryController.getList)

router.delete('/category/:id', authMiddleware, categoryController.deleteById)

router.patch('/category/:id', authMiddleware, categoryController.updateById)

module.exports = router
