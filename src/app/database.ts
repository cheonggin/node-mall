import { Sequelize } from 'sequelize'

import config from './config'

const sequelize = new Sequelize({
  host: config.DB_HOST,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'create_at',
    updatedAt: 'update_at'
  }
})

sequelize
  .authenticate()
  .then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'))

export default sequelize
