/*eslint-disable*/
import type { ParsedUrlQuery } from 'querystring'

// 为 Context 类型扩展自定义属性
declare module 'koa' {
  interface Context {
    success: (msg?: string) => void
    fail: (opt: FailParams) => void
  }
}

export interface FailParams {
  status: number
  code: number
  message: string
}

export interface ListAttributes extends ParsedUrlQuery {
  query: string
  offset: string
  limit: string
}
