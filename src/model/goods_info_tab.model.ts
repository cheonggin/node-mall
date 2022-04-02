import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { GoodsInfoTabInstance } from '../types/goods_info_tab.type'

const GoodsInfoTab = sequelize.define<GoodsInfoTabInstance>('goods_info_tab', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tab_name: {
    type: DataTypes.STRING
  },
  page_info: {
    type: DataTypes.JSON
  }
})

export default GoodsInfoTab
