import type { RowDataPacket } from 'mysql2'
import type { ParsedUrlQuery } from 'querystring'

export interface IAdmin {
  name: string
  password: string
}

export interface IAdminDataType extends RowDataPacket {
  id: number
  name: string
  password: string
  create_at: Date
  update_at: Date
}

export interface IAdminListParams extends ParsedUrlQuery {
  offset: string
  limit: string
}
