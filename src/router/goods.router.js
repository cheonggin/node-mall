const Router = require('koa-router')

const goodsController = require('../controllers/goods.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = new Router()

router.post('/goods', authMiddleware, goodsController.create)

router.get('/goods/list', authMiddleware, goodsController.getList)

router.delete('/goods/:id', authMiddleware, goodsController.deleteById)

router.patch('/goods/:id', authMiddleware, goodsController.updateById)

module.exports = router
