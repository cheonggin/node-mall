import jwt from 'jsonwebtoken'

import type { Context } from 'koa'
import type { AdminAttributes } from '../types/admin.types'

import config from '../app/config'
import adminService from '../service/admin.service'

class AuthController {
  public async adminLogin(ctx: Context) {
    const { name } = ctx.request.body as AdminAttributes
    const result = await adminService.findAdminByName(name)
    const { id } = result[0]

    // 生成token并返回
    const token = jwt.sign({ id, name }, config.PRIVATE_KEY, {
      algorithm: 'RS256',
      expiresIn: '1d'
    })

    ctx.body = {
      token,
      user: { id, name }
    }
  }
}

export default new AuthController()
