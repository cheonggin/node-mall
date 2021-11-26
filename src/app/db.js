const mongoose = require('mongoose')
const { MONGDB_HOST, MONGODB_PORT, MONGODB_DATABASE } = require('./config')

mongoose
  .connect(`${MONGDB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`)
  .then(() => console.log('数据库连接成功'))
  .catch(error => console.log('数据库连接失败', error))
