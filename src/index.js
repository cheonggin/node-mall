const app = require('./app')
const { APP_HOST, APP_PORT } = require('./app/config')

app.listen(5000, () =>
  console.log(`server is runing on ${APP_HOST}:${APP_PORT}`)
)
