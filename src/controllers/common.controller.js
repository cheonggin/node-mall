const jwt = require('jsonwebtoken')

const commonService = require('../services/common.service')
const { CREATE_ERROR } = require('../constant/error-type')
const { PUBLIC_KEY } = require('../app/config')

class CommonController {
  async create (ctx) {
    // 插入数据到数据库中
    try {
      await commonService.create(ctx)

      ctx.body = {
        code: 0,
        message: '添加成功',
        data: ''
      }
    } catch (error) {
      console.error(error)
      ctx.app.emit('error', CREATE_ERROR, ctx)
    }
  }

  async login (ctx) {
    const user = await commonService.getUserInfoByName(ctx)
    const { resource } = ctx.params

    // 生成token并返回
    const token = jwt.sign({ id: user._id }, PUBLIC_KEY, {
      expiresIn: '30d'
    })
    const userinfo = {
      username: user.username
    }

    if (resource === 'admin') {
      userinfo.is_amdin = user.is_admin
    }

    ctx.body = {
      code: 0,
      message: '登录成功',
      data: {
        token,
        userinfo
      }
    }
  }

  async getAllInfo (ctx) {
    const result = await commonService.getList(ctx)

    ctx.body = {
      code: 0,
      message: 'success',
      data: result
    }
  }

  async deleteDataById (ctx) {
    await commonService.deleteDataById(ctx)

    ctx.body = {
      code: 0,
      message: 'success'
    }
  }

  async updateDataById (ctx) {
    await commonService.updateDataById(ctx)

    ctx.body = {
      code: 0,
      message: 'success'
    }
  }
}

module.exports = new CommonController()
