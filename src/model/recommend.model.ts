import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { RecommendInstance } from '../types/recommend.types'

const Recommend = sequelize.define<RecommendInstance>('recommend', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titleImgs: {
    type: DataTypes.JSON
  },
  products: {
    type: DataTypes.JSON
  }
})

export default Recommend
