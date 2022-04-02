import { Model, Optional } from 'sequelize'

export interface GoodsInfoBannerAttributes {
  id: number
  product_id: number
  img_url: string
}

export interface GoodsInfoBannerCreationAttributes
  extends Optional<GoodsInfoBannerAttributes, 'id'> {}

export interface GoodsInfoBannerInstance
  extends Model<GoodsInfoBannerAttributes, GoodsInfoBannerCreationAttributes>,
    GoodsInfoBannerAttributes {}
