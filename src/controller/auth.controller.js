const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')

class AuthController {
  async login(ctx, next) {
    const { id, name } = ctx.user

    // 生成token并返回
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: '1d',
      algorithm: 'RS256'
    })

    ctx.body = {
      token,
      user: { id, name }
    }
  }
}

module.exports = new AuthController()
