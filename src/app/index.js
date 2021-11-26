const Koa = require('koa')
const KoaBody = require('koa-body')

require('./db')
const router = require('../router')
const errorHandle = require('./error-handle')
const app = new Koa()

// 解析请求参数
app.use(KoaBody())
router(app)

app.on('error', errorHandle)

module.exports = app
