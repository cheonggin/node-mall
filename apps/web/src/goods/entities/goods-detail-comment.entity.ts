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
  tableName: 'goods-detail-comment',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class GoodsDetailComment extends Model<GoodsDetailComment> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @ForeignKey(() => Goods)
  @Column({ type: DataType.INTEGER })
  product_id: number

  @BelongsTo(() => Goods)
  goods: Goods

  @Column({ type: DataType.STRING })
  satisfy_per: string

  @Column({ type: DataType.JSON })
  comment_tags: any[]

  @AllowNull(false)
  @Column({ type: DataType.JSON })
  list: any[]
}
