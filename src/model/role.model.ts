import { DataTypes } from 'sequelize'

import sequelize from '../app/database'
// import Menu from './menu.model'
// import RoleMenu from './role_menu.model'

import type { RoleInstance } from '../types/role.types'
// import Menu from './menu.model'

const Role = sequelize.define<RoleInstance>('role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '角色名称'
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '角色描述'
  },
  checkedKeys: {
    type: DataTypes.JSON,
    comment: '选中的节点'
  },
  halfCheckedKeys: {
    type: DataTypes.JSON,
    comment: '半选中的节点'
  }
})

// Role.belongsToMany(Menu, { through: RoleMenu, foreignKey: 'role_id' })
// Menu.belongsToMany(Role, { through: RoleMenu, foreignKey: 'menu_id' })
// Role.sync({ force: true })

export default Role
