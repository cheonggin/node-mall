const commonRouter = require('./common.router')

module.exports = app => {
  app.use(commonRouter.routes())
  app.use(commonRouter.allowedMethods())
}
