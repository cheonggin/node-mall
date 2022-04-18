import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import { User } from '../../user/entities/user.entity'

@Table({
  tableName: 'avatar',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class Avatar extends Model<Avatar> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  filename: string

  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  size: number

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  mimetype: string

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number

  @BelongsTo(() => User)
  user: User
}
