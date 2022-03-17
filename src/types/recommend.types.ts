import { Model, Optional } from 'sequelize'

export interface RecommendAttributes {
  id: number
  titleImgs: any[]
  products: any[]
}

export interface RecommendCreationAttributes
  extends Optional<RecommendAttributes, 'id'> {}

export interface RecommendInstance
  extends Model<RecommendAttributes, RecommendCreationAttributes>,
    RecommendAttributes {}
