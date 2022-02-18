const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'))
const PRIVATE_KEY = fs.readFileSync(
  path.resolve(__dirname, './keys/private.key')
)

module.exports = {
  APP_HOST,
  APP_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
} = process.env

module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY
