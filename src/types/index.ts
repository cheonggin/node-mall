/*eslint-disable*/
import type { JwtPayload } from 'jsonwebtoken'
import type { IAdminDataType } from './admin.types'

// 为 Context 类型扩展自定义属性
declare module 'koa' {
  interface Context {
    success: (msg?: string) => void
    fail: (opt: FailParams) => void
    user: IAdminDataType | JwtPayload | string
  }
}

export interface FailParams {
  status: number
  code: number
  message: string
}
