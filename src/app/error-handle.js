module.exports = (error, ctx) => {
  let status

  switch (error.code) {
    case '10001':
      status = 422
      break
    case '10002':
      status = 422
      break
    case '10003':
      status = 401
      break
    case '10004':
      status = 401
      break
    default:
      status = 500
  }

  ctx.status = status
  ctx.body = error
  console.error(error)
}
