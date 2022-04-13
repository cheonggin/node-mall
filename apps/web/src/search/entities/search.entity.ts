import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript'

@Table({
  tableName: 'search-keyword',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class Search extends Model<Search> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @AllowNull(false)
  @Unique
  @Column({ type: DataType.STRING })
  keyword: string
}
