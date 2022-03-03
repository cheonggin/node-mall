import type { Context } from 'koa'
import type { RoleAttributes } from '../types/Role.types'
import type { ListAttributes } from '../types'

import roleService from '../service/role.service'
import errorTypes from '../constant/error-types'

class RoleController {
  /**
   * 添加角色
   * @param ctx
   */
  public async create(ctx: Context) {
    const roleParams = ctx.request.body as RoleAttributes

    try {
      await roleService.create(roleParams)

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
   * 获取角色列表
   * @param ctx
   */
  public async getList(ctx: Context) {
    const listParams = ctx.request.query as ListAttributes

    try {
      const result = await roleService.getList(listParams)

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

export default new RoleController()
