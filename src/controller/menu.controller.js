const menuService = require('../service/menu.service')

class MenuController {
  async create(ctx, next) {
    const menuInfo = ctx.request.body

    menuInfo.pid = menuInfo.pid ? menuInfo.pid : 0
    menuInfo.type = menuInfo.type ? menuInfo.type : 1
    menuInfo.path = menuInfo.path ? menuInfo.path : ''
    menuInfo.icon = menuInfo.icon ? menuInfo.icon : ''
    menuInfo.component = menuInfo.component ? menuInfo.component : ''
    menuInfo.menu_code = menuInfo.menu_code ? menuInfo.menu_code : ''

    try {
      const result = await menuService.create(menuInfo)
      ctx.body = result
    } catch (error) {
      console.log(error)
    }
  }

  async getList(ctx, next) {
    const result = await menuService.getList()

    ctx.body = result
  }
}

module.exports = new MenuController()
