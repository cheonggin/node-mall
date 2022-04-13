import { Category } from '@libs/database/models/category.model'
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
  tableName: 'category-detail',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class CategoryDetail extends Model<CategoryDetail> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  category_id: number

  @BelongsTo(() => Category)
  category: Category

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name: string

  @Column({ type: DataType.STRING })
  path: string

  @Column({ type: DataType.STRING })
  img_url: string

  @Column({ type: DataType.STRING })
  price: string

  @Column({ type: DataType.STRING })
  market_price: string

  @Column({ type: DataType.BOOLEAN })
  is_multi_price: boolean

  @Column({ type: DataType.STRING })
  product_desc: string

  @Column({ type: DataType.STRING })
  product_desc_origin: string

  @Column({ type: DataType.INTEGER })
  product_id: number

  @Column({ type: DataType.JSON })
  labels: any[]
}
