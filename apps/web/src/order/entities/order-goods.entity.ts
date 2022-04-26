import { Goods } from '@libs/database/models/goods.model'
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
import { Order } from './order.entity'

@Table({
  tableName: 'order-goods',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class OrderGoods extends Model<OrderGoods> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  count: number

  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER })
  order_id: number

  @BelongsTo(() => Order)
  order: Order

  @ForeignKey(() => Goods)
  @Column({ type: DataType.INTEGER })
  product_id: number

  @BelongsTo(() => Goods)
  product: [Goods]
}
