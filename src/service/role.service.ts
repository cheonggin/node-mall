import { Op } from 'sequelize'

import Role from '../model/role.model'

import type { RoleAttributes } from '../types/role.types'
import type { ListAttributes } from '../types'
import Menu from '../model/menu.model'

class RoleService {
  public async create(roleParams: RoleAttributes) {
    const result = await Role.create(roleParams)

    return result
  }

  public async getList(opt: ListAttributes) {
    const result = await Role.findAndCountAll({
      where: {
        name: {
          [Op.like]: `%${opt.query}%`
        }
      },
      offset: parseInt(opt.offset),
      limit: parseInt(opt.limit)
    })

    return result
  }

  public async updateById(id: number, opt: RoleAttributes) {
    const result = await Role.update(opt, { where: { id } })

    return result
  }

  public async deleteById(id: number) {
    const result = await Role.destroy({ where: { id } })

    return result
  }

  public async getPermissionById(id: number) {
    const roleResult = await Role.findOne({ where: { id } })

    const { checkedKeys, halfCheckedKeys } = roleResult
    const result = await Menu.findAll({
      where: {
        id: {
          [Op.in]: [...checkedKeys, ...halfCheckedKeys]
        }
      }
    })

    return result
  }
}

export default new RoleService()
