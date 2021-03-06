import { GoodsDetailBanner } from 'apps/web/src/goods/entities/goods-detail-banner.entity'
import { GoodsDetailComment } from 'apps/web/src/goods/entities/goods-detail-comment.entity'
import { GoodsDetailTab } from 'apps/web/src/goods/entities/goods-detail-tab.entity'
import { GoodsDetail } from 'apps/web/src/goods/entities/goods-detail.entity'
import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'goods',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class Goods extends Model<Goods> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name: string

  @Column({ type: DataType.STRING })
  desc: string

  @Column({ type: DataType.STRING })
  image: string

  @Column({ type: DataType.STRING })
  price: string

  @Column({ type: DataType.STRING })
  satisfy_per: string

  @Column({ type: DataType.STRING })
  comments_total: string

  @Column({ type: DataType.JSON })
  activity_label: any[]

  @Column({ type: DataType.JSON })
  class_parameters: any[]

  @HasOne(() => GoodsDetail)
  detail: GoodsDetail

  @HasMany(() => GoodsDetailBanner)
  bannerList: GoodsDetailBanner[]

  @HasOne(() => GoodsDetailComment)
  comment: GoodsDetailComment

  @HasMany(() => GoodsDetailTab)
  tabs: GoodsDetailTab[]
}
