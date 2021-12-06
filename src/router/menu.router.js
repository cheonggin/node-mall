const Router = require('koa-router')

const menuController = require('../controllers/menu.controller')

const router = new Router()

router.post('/menu', menuController.create)

router.get('/menu/list', menuController.getList)

router.delete('/menu/:id', menuController.deleteById)

router.patch('/menu/:id', menuController.updateById)

module.exports = router
