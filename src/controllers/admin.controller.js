const jwt = require('jsonwebtoken')

const adminService = require('../services/admin.service')
const menuService = require('../services/menu.service')
const { CREATE_ERROR } = require('../constant/error-type')
const { PRIVATE_KEY } = require('../app/config')

class AdminController {
  async create (ctx) {
    // 插入数据到数据库中
    try {
      await adminService.create(ctx)

      ctx.body = {
        code: 0,
        message: '添加成功',
        data: ''
      }
    } catch (error) {
      ctx.app.emit('error', CREATE_ERROR, ctx)
    }
  }

  async login (ctx) {
    const result = await adminService.getUserInfoByName(ctx)
    // 从返回结果对象中剔除password属性, 将剩下的属性放到user对象
    const { password, ...user } = result._doc
    // 获取对应角色菜单
    const userMenu = await menuService.getMenuListByRoleId(user.roleId)

    // 生成token
    const token = jwt.sign({ user }, PRIVATE_KEY, {
      algorithm: 'RS256',
      expiresIn: '30d'
    })

    ctx.body = {
      code: 0,
      message: '登录成功',
      data: {
        token,
        userinfo: user,
        userMenu
      }
    }
  }

  async getList (ctx) {
    const result = await adminService.getList(ctx)

    ctx.body = {
      code: 0,
      message: 'success',
      data: result
    }
  }

  async deleteById (ctx) {
    const result = await adminService.deleteById(ctx)

    ctx.body = {
      code: 0,
      message: '删除成功',
      data: result
    }
  }

  async updateById (ctx) {
    await adminService.updateById(ctx)

    ctx.body = {
      code: 0,
      message: '修改成功'
    }
  }
}

module.exports = new AdminController()
