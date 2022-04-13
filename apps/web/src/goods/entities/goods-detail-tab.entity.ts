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
  tableName: 'goods-detail-tab',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class GoodsDetailTab extends Model<GoodsDetailTab> {
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
  tab_name: string

  @Column({ type: DataType.JSON })
  page_info: any[]
}
