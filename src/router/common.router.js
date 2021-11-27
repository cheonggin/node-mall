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

module.exports = router
