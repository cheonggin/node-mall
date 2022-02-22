import type { RowDataPacket } from 'mysql2'

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
