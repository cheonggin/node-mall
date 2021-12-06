const Router = require('koa-router')

const goodsController = require('../controllers/goods.controller')

const router = new Router()

router.post('/goods', goodsController.create)

router.get('/goods/list', goodsController.getList)

router.delete('/goods/:id', goodsController.deleteById)

router.patch('/goods/:id', goodsController.updateById)

module.exports = router
