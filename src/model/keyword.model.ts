import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { KeywordInstance } from '../types/keyword.types'

const Keyword = sequelize.define<KeywordInstance>('keyword', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  keyword: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default Keyword
