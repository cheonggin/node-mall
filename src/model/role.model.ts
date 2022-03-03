import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { RoleInstance } from '../types/role.types'

const Role = sequelize.define<RoleInstance>('role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '角色名称'
  }
})

export default Role
