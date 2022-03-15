import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { GoodsInstance } from '../types/goods.types'

const Goods = sequelize.define<GoodsInstance>('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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
  }
})

export default Goods
