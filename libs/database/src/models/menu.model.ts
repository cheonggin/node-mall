import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'menu',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class Menu extends Model<Menu> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  pid: number | null

  @AllowNull(false)
  @Column
  name: string

  @Column({
    type: DataType.ENUM,
    values: ['1', '2'],
    defaultValue: '1',
    comment: '菜单类型，1为菜单，2为按钮'
  })
  type: string

  @Column
  path: string

  @Column
  icon: string

  @Column
  component: string

  @Column
  menu_code: string
}
