import { Model, Optional } from 'sequelize'

export interface GoodsAttributes {
  id: number
  name: string
  desc: string
  image: string
  price: string
}

export interface GoodsCreationAttributes
  extends Optional<GoodsAttributes, 'id'> {}

export interface GoodsInstance
  extends Model<GoodsAttributes, GoodsCreationAttributes>,
    GoodsAttributes {}
