import { DataTypes } from 'sequelize'

import sequelize from '../app/database'

import type { CategoryInstance } from '../types/category.types'

const Category = sequelize.define<CategoryInstance>('category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pid: {
    type: DataTypes.INTEGER,
    comment: '父级id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  path: {
    type: DataTypes.STRING
  },
  img_url: {
    type: DataTypes.STRING
  }
})

export default Category
