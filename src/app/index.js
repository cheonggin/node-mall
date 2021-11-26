const Koa = require('koa')
const Router = require('koa-router')

require('./db')

const app = new Koa()
const router = new Router()

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/', ctx => {
  ctx.body = 'ok'
})

module.exports = app
