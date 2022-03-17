import { Model, Optional } from 'sequelize'

export interface BannerAttributes {
  id: number
  path: string
  img_url: string
}

export interface BannerCreationAttributes
  extends Optional<BannerAttributes, 'id'> {}

export interface BannerInstance
  extends Model<BannerAttributes, BannerCreationAttributes>,
    BannerAttributes {}
