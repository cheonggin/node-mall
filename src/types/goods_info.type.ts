import { Model, Optional } from 'sequelize'

export interface GoodsInfoAttributes {
  product_id: number
  name: string
  price: string
  product_desc: string
  sell_point_desc: any[]
  class_parameters: object
}

export interface GoodsInfoCreationAttributes
  extends Optional<GoodsInfoAttributes, 'product_id'> {}

export interface GoodsInfoInstance
  extends Model<GoodsInfoAttributes, GoodsInfoCreationAttributes>,
    GoodsInfoAttributes {}
