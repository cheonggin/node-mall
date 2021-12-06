const Router = require('koa-router')

const categoryController = require('../controllers/category.controller')

const router = new Router()

router.post('/category', categoryController.create)

router.get('/category/list', categoryController.getList)

router.delete('/category/:id', categoryController.deleteById)

router.patch('/category/:id', categoryController.updateById)

module.exports = router
