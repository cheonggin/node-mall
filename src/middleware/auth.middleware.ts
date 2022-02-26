import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { Context, Next } from 'koa'
import { IAdmin, IAdminDataType } from '../types/admin.types'

import errorTypes from '../constant/error-types'
import adminService from '../service/admin.service'
import config from '../app/config'

export const verifyLogin = async (ctx: Context, next: Next) => {
  const { name, password }: IAdmin = ctx.request.body

  // 验证用户名、密码是否为空
  ctx.assert(name, 400, errorTypes.userFormatError)
  ctx.assert(password, 400, errorTypes.userFormatError)

  // 查询用户是否存在
  const result = await adminService.findAdminByName(name)
  const user: IAdminDataType = result[0]
  ctx.assert(user, 400, errorTypes.userDoesNotExists)

  // 用户存在验证密码是否一致
  const isValid: boolean = bcrypt.compareSync(password, user.password)
  ctx.assert(isValid, 400, errorTypes.passwordIsIncorrect)

  await next()
}

export const verifyAuth = async (ctx: Context, next: Next) => {
  const { authorization } = ctx.request.headers
  ctx.assert(authorization, 401, errorTypes.tokenExpiredError)

  const token = authorization.split(' ').pop()

  ctx.assert(token, 401, errorTypes.tokenExpiredError)

  try {
    const result = jwt.verify(token, config.PUBLIC_KEY, {
      algorithms: ['RS256']
    })

    ctx.user = result
    await next()
  } catch (error) {
    ctx.assert('', 401, errorTypes.tokenExpiredError)
  }
}
