const Router = require('koa-router')

const roleController = require('../controllers/role.controller')

const router = new Router()

router.post('/role', roleController.create)

router.get('/role/list', roleController.getList)

router.delete('/role/:id', roleController.deleteById)

router.patch('/role/:id', roleController.updateById)

module.exports = router
