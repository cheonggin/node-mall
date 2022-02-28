import type { Context } from 'koa'
import type { AdminAttributes } from '../types/admin.types'
import type { ListAttributes } from '../types'

import adminService from '../service/admin.service'
import errorTypes from '../constant/error-types'

class AdminController {
  /**
   * 添加管理员
   * @param ctx
   */
  public async create(ctx: Context) {
    const user = ctx.request.body as AdminAttributes

    try {
      await adminService.create(user)

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
   * 获取管理员列表
   * @param ctx
   */
  public async getList(ctx: Context) {
    const listParams = ctx.request.query as ListAttributes

    try {
      const result = await adminService.getList(listParams)

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

export default new AdminController()
