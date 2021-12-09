const path = require('path')
const Koa = require('koa')
const KoaBody = require('koa-body')
const resource = require('koa-static')

require('./db')
const router = require('../router')
const errorHandle = require('./error-handle')
const app = new Koa()

// 访问静态资源
app.use(resource(path.join(__dirname, '../public')))
// 解析请求参数
app.use(KoaBody())
router(app)

app.on('error', errorHandle)

module.exports = app
