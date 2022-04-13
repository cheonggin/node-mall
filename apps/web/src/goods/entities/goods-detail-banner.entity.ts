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
  tableName: 'goods-detail-banner',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class GoodsDetailBanner extends Model<GoodsDetailBanner> {
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
  img_url: string
}
