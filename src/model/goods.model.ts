import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import { GoodsInstance } from '../types/goods.types'

const Goods = sequelize.define<GoodsInstance>('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  product_id: { type: DataTypes.INTEGER },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.STRING
  },
  market_price: {
    type: DataTypes.STRING
  },
  is_multi_price: {
    type: DataTypes.BOOLEAN
  },
  satisfy_per: {
    type: DataTypes.STRING
  },
  comments_total: {
    type: DataTypes.STRING
  },
  activity_label: {
    type: DataTypes.JSON
  },
  class_parameters: {
    type: DataTypes.JSON
  }
})

export default Goods
