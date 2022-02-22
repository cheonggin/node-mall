import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const { APP_HOST, APP_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } =
  process.env

export default {
  APP_HOST,
  APP_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
}
