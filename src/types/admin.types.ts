import type { Model, Optional } from 'sequelize'

export interface AdminAttributes {
  id?: number
  name: string
  password: string
  role_id: number
}

interface AdminCreationAttributes extends Optional<AdminAttributes, 'name'> {}

export interface AdminInstance
  extends Model<AdminAttributes, AdminCreationAttributes>,
    AdminAttributes {}
