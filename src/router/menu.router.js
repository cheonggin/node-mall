const Router = require('koa-router')

const menuController = require('../controllers/menu.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = new Router()

router.post('/menu', authMiddleware, menuController.create)

router.get('/menu/list', authMiddleware, menuController.getList)

router.delete('/menu/:id', authMiddleware, menuController.deleteById)

router.patch('/menu/:id', authMiddleware, menuController.updateById)

module.exports = router
