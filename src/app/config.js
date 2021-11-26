const dotenv = require('dotenv')
const fs = require('fs')
const { resolve } = require('path')

dotenv.config()
const PRIVATE_KEY = fs.readFileSync(resolve(__dirname, './key/private.key'))
const PUBLIC_KEY = fs.readFileSync(resolve(__dirname, './key/public.key'))

module.exports = process.env

module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY
