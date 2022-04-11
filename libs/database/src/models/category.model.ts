import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'category',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class Category extends Model<Category> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  pid: number

  @AllowNull(false)
  @Column
  name: string

  @Column
  path: string

  @Column
  img_url: string
}
