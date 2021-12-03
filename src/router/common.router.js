const Router = require('koa-router')

const commonController = require('../controllers/common.controller')
const {
  setModelName,
  verifyUser,
  verifyLogin
} = require('../middleware/common.middleware')

const router = new Router()

// 添加
router.post(
  '/rest/:resource',
  setModelName,
  verifyUser,
  commonController.create
)

// 用户登录
router.post(
  '/rest/:resource/login',
  setModelName,
  verifyLogin,
  commonController.login
)

// 获取所有数据
router.get('/rest/:resource', setModelName, commonController.getAllInfo)

// 通过id删除数据
router.delete('/rest/:resource/:id', setModelName, commonController.deleteDataById)

// 通过id修改数据
router.patch('/rest/:resource/:id', setModelName, commonController.updateDataById)

module.exports = router
