import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const { APP_HOST, APP_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } =
  process.env

const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'))
const PRIVATE_KEY = fs.readFileSync(
  path.resolve(__dirname, './keys/private.key')
)

export default {
  APP_HOST,
  APP_PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  PUBLIC_KEY,
  PRIVATE_KEY
}
