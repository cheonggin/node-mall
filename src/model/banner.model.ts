import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { BannerInstance } from '../types/banner.type'

const Banner = sequelize.define<BannerInstance>('banner', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  path: {
    type: DataTypes.STRING
  },
  img_url: {
    type: DataTypes.STRING
  }
})

export default Banner
