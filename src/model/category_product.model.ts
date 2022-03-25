import { DataTypes } from 'sequelize'

import sequelize from '../app/database'
import Category from './category.model'

const CategoryProduct = sequelize.define('category_product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category_id: {
    type: DataTypes.INTEGER
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
  },
  is_multi_price: {
    type: DataTypes.BOOLEAN
  },
  market_price: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.STRING
  },
  product_desc: {
    type: DataTypes.STRING
  },
  product_desc_origin: {
    type: DataTypes.STRING
  },
  product_id: {
    type: DataTypes.INTEGER
  },
  labels: {
    type: DataTypes.JSON
  }
})

Category.hasMany(CategoryProduct, { foreignKey: 'category_id' })
CategoryProduct.belongsTo(Category, { foreignKey: 'category_id' })

export default CategoryProduct
