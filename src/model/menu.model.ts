import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { MenuInstance } from '../types/Menu.types'

const Menu = sequelize.define<MenuInstance>('menu', {
  pid: {
    type: DataTypes.INTEGER,
    comment: '父级id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM,
    values: ['1', '2'],
    comment: '菜单类型，1为菜单，2为按钮'
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '路由地址'
  },
  icon: {
    type: DataTypes.STRING,
    comment: '图标'
  },
  component: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '组件名称'
  },
  menu_code: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '权限标识'
  }
})

Menu.belongsTo(Menu, { foreignKey: 'pid' })

export default Menu
