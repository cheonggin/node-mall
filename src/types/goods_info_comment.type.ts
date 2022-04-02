import { Model, Optional } from 'sequelize'

export interface GoodsInfoCommentAttributes {
  id: number
  product_id: number
  detail: object
  list: any[]
}

export interface GoodsInfoCommentCreationAttributes
  extends Optional<GoodsInfoCommentAttributes, 'id'> {}

export interface GoodsInfoCommentInstance
  extends Model<GoodsInfoCommentAttributes, GoodsInfoCommentCreationAttributes>,
    GoodsInfoCommentAttributes {}
