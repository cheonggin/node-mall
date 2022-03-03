import type { Model, Optional } from 'sequelize'

export interface RoleAttributes {
  id?: number
  name: string
}

interface RoleCreationAttributes extends Optional<RoleAttributes, 'name'> {}

export interface RoleInstance
  extends Model<RoleAttributes, RoleCreationAttributes>,
    RoleAttributes {}
