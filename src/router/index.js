const adminRouter = require('./admin.router')

module.exports = app => {
  app.use(adminRouter.routes())
  app.use(adminRouter.allowedMethods())
}
