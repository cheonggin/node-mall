import { Model, Optional } from 'sequelize'

export interface MenuAttributes {
  pid: number | null
  name: string
  type: '1' | '2'
  path: string
  icon: string | null
  component: string
  menu_code: string
}

export interface MenuCreationAttributes
  extends Optional<MenuAttributes, 'name'> {}

export interface MenuInstance
  extends Model<MenuAttributes, MenuCreationAttributes>,
    MenuAttributes {}
