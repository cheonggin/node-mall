import type { Model, Optional } from 'sequelize'

export interface AdminAttributes {
  name: string
  password: string
}

interface AdminCreationAttributes extends Optional<AdminAttributes, 'name'> {}

export interface AdminInstance
  extends Model<AdminAttributes, AdminCreationAttributes>,
    AdminAttributes {
  id: number
}
