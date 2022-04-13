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
  tableName: 'home-shortcut',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class HomeShortcut extends Model<HomeShortcut> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  path: string

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  img_url: string
}
