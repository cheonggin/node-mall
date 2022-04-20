import { Goods } from '@libs/database/models/goods.model'
import {
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
  tableName: 'cart',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class Cart extends Model<Cart> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @Column({ type: DataType.INTEGER })
  count: number

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  checked: boolean

  @ForeignKey(() => Goods)
  @Column({ type: DataType.INTEGER })
  product_id: number

  @BelongsTo(() => Goods)
  product: Goods

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number

  @BelongsTo(() => User)
  user: User
}
