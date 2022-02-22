import Koa from 'koa'

import config from './config'

const app = new Koa()

app.listen(config.APP_PORT, () =>
  console.log(`API is listening on ${config.APP_HOST}:${config.APP_PORT}`)
)

export default app
