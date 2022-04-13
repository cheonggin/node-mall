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

@Table({
  tableName: 'goods-detail',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class GoodsDetail extends Model<GoodsDetail> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @ForeignKey(() => Goods)
  @Column({ type: DataType.INTEGER })
  product_id: number

  @BelongsTo(() => Goods)
  goods: Goods

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name: string

  @Column({ type: DataType.STRING })
  price: string

  @Column({ type: DataType.STRING })
  product_desc: string

  @Column({ type: DataType.JSON })
  sell_point_desc: any[]

  @Column({ type: DataType.JSON })
  class_parameters: any[]
}
