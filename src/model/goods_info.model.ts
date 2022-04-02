import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { GoodsInfoInstance } from '../types/goods_info.type'

const GoodsInfo = sequelize.define<GoodsInfoInstance>('goods_info', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING
  },
  product_desc: {
    type: DataTypes.STRING
  },
  sell_point_desc: {
    type: DataTypes.JSON
  },
  class_parameters: {
    type: DataTypes.JSON
  }
})

export default GoodsInfo
