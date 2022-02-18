class AdminController {
  async create(ctx, next) {
    ctx.body = ctx.request.body
  }
}

module.exports = new AdminController()
