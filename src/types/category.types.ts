import { Model, Optional } from 'sequelize'

export interface CategoryAttributes {
  id: number
  pid: number | null
  name: string
  path: string
  img_url: string
}

export interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, 'id'> {}

export interface CategoryInstance
  extends Model<CategoryAttributes, CategoryCreationAttributes>,
    CategoryAttributes {}
