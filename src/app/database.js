const mysql = require('mysql2')

const config = require('./config')

const connect = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE
})

connect.getConnection(err => {
  if (err) {
    console.log('数据库连接失败')
  } else {
    console.log('数据库连接成功')
  }
})

module.exports = connect.promise()
