import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { GoodsInfoCommentInstance } from '../types/goods_info_comment.type'

const GoodsInfoComment = sequelize.define<GoodsInfoCommentInstance>(
  'goods_info_comment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER
    },
    detail: {
      type: DataTypes.JSON
    },
    list: {
      type: DataTypes.JSON
    }
  }
)

export default GoodsInfoComment
