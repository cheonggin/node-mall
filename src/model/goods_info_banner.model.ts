import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { GoodsInfoBannerInstance } from '../types/goods_info_banner.type'

const GoodsInfoBanner = sequelize.define<GoodsInfoBannerInstance>(
  'goods_info_banner',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    img_url: {
      type: DataTypes.STRING
    }
  }
)

export default GoodsInfoBanner
