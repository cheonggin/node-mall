import type { Context } from 'koa'
import type { IMenuParams } from '../types/menu.types'

import menuService from '../service/menu.service'

class MenuController {
  public async create(ctx: Context) {
    const menuParams: IMenuParams = ctx.request.body

    menuParams.pid ??= null
    menuParams.path ??= ''
    menuParams.icon ??= null
    menuParams.component ??= ''
    menuParams.menu_code ??= ''

    const result = await menuService.create(menuParams)

    ctx.body = result
  }
}

export default new MenuController()
