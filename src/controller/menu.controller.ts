import type { Context } from 'koa'
import type { MenuAttributes } from '../types/Menu.types'
import type { ListAttributes } from '../types'

import menuService from '../service/menu.service'
import errorTypes from '../constant/error-types'

class MenuController {
  /**
   * 添加菜单
   * @param ctx
   */
  public async create(ctx: Context) {
    const menuParams = ctx.request.body as MenuAttributes

    try {
      await menuService.create(menuParams)

      ctx.body = 'ok'
    } catch (error) {
      ctx.app.emit(
        'error',
        { ...errorTypes.paramsError, message: error.message },
        ctx
      )
    }
  }

  public async getList(ctx: Context) {
    const listParams = ctx.request.query as ListAttributes

    try {
      const result = await menuService.getList(listParams)

      ctx.body = result
    } catch (error) {
      ctx.app.emit(
        'error',
        { ...errorTypes.paramsError, message: error.message },
        ctx
      )
    }
  }
}

export default new MenuController()
