import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'home-recommend',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: 'update_at'
})
export class HomeRecommend extends Model<HomeRecommend> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number

  @AllowNull(false)
  @Column({ type: DataType.JSON })
  titleImgs: any[]

  @AllowNull(false)
  @Column({ type: DataType.JSON })
  products: any[]
}
