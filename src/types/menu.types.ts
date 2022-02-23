import type { RowDataPacket } from 'mysql2'
export interface IMenuParams {
  pid?: number
  name: string
  type: 1 | 2
  path?: string
  icon?: string
  component?: string
  menu_code?: string
}

export interface IMenuDataType extends IMenuParams, RowDataPacket {
  create_at: Date
  update_at: Date
}
