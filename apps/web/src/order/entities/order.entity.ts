import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript'
import { Address } from '../../address/entities/address.entity'
import { User } from '../../user/entities/user.entity'
import { OrderGoods } from './order-goods.entity'

@Table({
  tableName: 'order',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class Order extends Model<Order> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @Unique
  @Column({ type: DataType.STRING })
  order_number: string

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    comment: '0未支付，1已支付'
  })
  pay_status: number

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number

  @BelongsTo(() => User)
  user: User

  @ForeignKey(() => Address)
  @Column({ type: DataType.INTEGER })
  address_id: number

  @BelongsTo(() => Address)
  address: Address

  @HasMany(() => OrderGoods)
  goodsList: [OrderGoods]
}
