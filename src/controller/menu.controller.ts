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
    console.log(menuParams)
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

  /**
   * 获取菜单列表
   * @param ctx
   */
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

  /**
   * 通过id修改数据
   * @param ctx
   */
  public async updateById(ctx: Context) {
    const id = ctx.params.id as number
    const updateData = ctx.request.body as MenuAttributes

    await menuService.updateById(id, updateData)

    ctx.body = 'ok'
  }

  public async deleteById(ctx: Context) {
    const id = ctx.params.id as number

    try {
      await menuService.deleteById(id)
      ctx.body = 'ok'
    } catch (error) {
      console.log(error)
    }
  }
}

export default new MenuController()
