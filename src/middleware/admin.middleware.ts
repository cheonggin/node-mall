import bcrypt from 'bcrypt'

import type { Context, Next } from 'koa'
import type { IAdmin } from '../types/admin.types'

import errorTypes from '../constant/error-types'
import adminService from '../service/admin.service'

export const verifyAdmin = async (ctx: Context, next: Next) => {
  const { name, password }: IAdmin = ctx.request.body

  ctx.assert(name, 400, errorTypes.userFormatError)
  ctx.assert(password, 400, errorTypes.userFormatError)

  // 查询用户名是否已注册
  const result = await adminService.findAdminByName(name)
  ctx.assert(!result.length, 409, errorTypes.userAlreadyExists)

  await next()
}

// 对密码加密处理
export const passwordHandler = async (ctx: Context, next: Next) => {
  const { password }: IAdmin = ctx.request.body
  const hashPassword = bcrypt.hashSync(password, 8)

  ctx.request.body.password = hashPassword

  await next()
}
