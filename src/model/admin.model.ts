import { DataTypes } from 'sequelize'

import sequelize from '../app/database'
import Role from './role.model'

import type { AdminInstance } from '../types/admin.types'

const Admin = sequelize.define<AdminInstance>('admin', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '管理员用户名，唯一'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '密码'
  },
  role_id: {
    type: DataTypes.INTEGER
  }
})

Admin.belongsTo(Role, { foreignKey: 'role_id' })

export default Admin
