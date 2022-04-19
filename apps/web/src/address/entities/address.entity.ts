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
  tableName: 'address',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class Address extends Model<Address> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name: string

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  tel: string

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  province: string

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  city: string

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  county: string

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  addressDetail: string

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  areaCode: string

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isDefault: boolean

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number

  @BelongsTo(() => User)
  user: User
}
