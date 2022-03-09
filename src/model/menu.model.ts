import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { MenuInstance } from '../types/Menu.types'

const Menu = sequelize.define<MenuInstance>('menu', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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
    defaultValue: '1',
    comment: '菜单类型，1为菜单，2为按钮'
  },
  path: {
    type: DataTypes.STRING,
    comment: '路由地址'
  },
  icon: {
    type: DataTypes.STRING,
    comment: '图标'
  },
  component: {
    type: DataTypes.STRING,
    comment: '组件名称'
  },
  menu_code: {
    type: DataTypes.STRING,
    comment: '权限标识'
  }
})

// Menu.belongsTo(Menu, { foreignKey: 'pid' })
// Menu.sync({ force: true })

export default Menu
