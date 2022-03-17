import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { BannerInstance } from '../types/banner.type'

const Shortcut = sequelize.define<BannerInstance>('shortcut', {
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

export default Shortcut
