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
  tableName: 'user',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @AllowNull(false)
  @Unique
  @Column({ type: DataType.STRING })
  name: string

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  password: string
}
