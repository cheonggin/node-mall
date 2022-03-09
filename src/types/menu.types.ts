import { Model, Optional } from 'sequelize'

export interface MenuAttributes {
  id: number
  pid: number | null
  name: string
  type: '1' | '2'
  path: string | null
  icon: string | null
  component: string | null
  menu_code: string | null
}

export interface MenuCreationAttributes
  extends Optional<MenuAttributes, 'name'> {}

export interface MenuInstance
  extends Model<MenuAttributes, MenuCreationAttributes>,
    MenuAttributes {}
