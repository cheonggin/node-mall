import { Model, Optional } from 'sequelize'

export interface GoodsAttributes {
  id: number
  product_id: number
  name: string
  desc: string
  image: string
  price: string
  market_price: string
  is_multi_price: boolean
  satisfy_per: string
  comments_total: string
  activity_label: any[]
  class_parameters: any[]
}

export interface GoodsCreationAttributes
  extends Optional<GoodsAttributes, 'id'> {}

export interface GoodsInstance
  extends Model<GoodsAttributes, GoodsCreationAttributes>,
    GoodsAttributes {}
