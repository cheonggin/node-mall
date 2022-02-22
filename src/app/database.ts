import mysql from 'mysql2'

import config from './config'

const connect = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE
})

connect.getConnection((err: NodeJS.ErrnoException) => {
  if (err) {
    console.log('数据库连接失败')
  } else {
    console.log('数据库连接成功')
  }
})

export default connect.promise()
