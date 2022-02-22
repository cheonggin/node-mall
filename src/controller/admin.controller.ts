import type { Context } from 'koa'
import type { IAdmin } from '../types/admin.types'

import errorTypes from '../constant/error-types'
import adminService from '../service/admin.service'

class AdminController {
  /**
   * 添加管理员
   * @param ctx
   */
  public async create(ctx: Context) {
    const user: IAdmin = ctx.request.body

    try {
      const result = await adminService.create(user)
      ctx.body = result
    } catch (error) {
      ctx.assert('', 401, errorTypes.userRegisterError)
    }
  }
}

export default new AdminController()
