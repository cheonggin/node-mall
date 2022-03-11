import type { Model, Optional } from 'sequelize'

export interface RoleAttributes {
  id: number
  name: string
  desc: string
  checkedKeys: any[]
  halfCheckedKeys: any[]
}

interface RoleCreationAttributes extends Optional<RoleAttributes, 'id'> {}

export interface RoleInstance
  extends Model<RoleAttributes, RoleCreationAttributes>,
    RoleAttributes {}
