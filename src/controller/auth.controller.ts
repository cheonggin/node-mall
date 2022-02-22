import jwt from 'jsonwebtoken'

import type { Context } from 'koa'
import type { IAdmin } from '../types/admin.types'

import config from '../app/config'
import adminService from '../service/admin.service'

class AuthController {
  public async adminLogin(ctx: Context) {
    const { name }: IAdmin = ctx.request.body
    const result = await adminService.findAdminByName(name)
    const { id } = result[0]

    // 生成token并返回
    const token = jwt.sign({ id, name }, config.PRIVATE_KEY, {
      algorithm: 'RS256',
      expiresIn: '10000'
    })

    ctx.body = {
      token,
      user: { id, name }
    }
  }
}

export default new AuthController()
