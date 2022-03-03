import { Op } from 'sequelize'

import Role from '../model/role.model'

import type { RoleAttributes } from '../types/role.types'
import type { ListAttributes } from '../types'

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
}

export default new RoleService()
