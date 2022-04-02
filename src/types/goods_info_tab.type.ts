import { Model, Optional } from 'sequelize'

export interface GoodsInfoTabAttributes {
  id: number
  product_id: number
  tab_name: string
  page_info: any[]
}

export interface GoodsInfoTabCreationAttributes
  extends Optional<GoodsInfoTabAttributes, 'id'> {}

export interface GoodsInfoTabInstance
  extends Model<GoodsInfoTabAttributes, GoodsInfoTabCreationAttributes>,
    GoodsInfoTabAttributes {}
