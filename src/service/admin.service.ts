import { Op } from 'sequelize'

import Admin from '../model/admin.model'
import { AdminAttributes } from '../types/admin.types'
import type { ListAttributes } from '../types'

class AdminService {
  public async findAdminByName(name: string) {
    const result = await Admin.findAll({
      raw: true,
      where: { name }
    })

    return result
  }

  public async create(user: AdminAttributes) {
    const result = await Admin.create(user, {
      raw: true
    })

    return result
  }

  public async getList(opt: ListAttributes) {
    const result = await Admin.findAndCountAll({
      where: {
        name: {
          [Op.like]: `%${opt.query}%`
        }
      },
      offset: parseInt(opt.offset),
      limit: parseInt(opt.limit),
      attributes: { exclude: ['password'] }
    })

    return result
  }
}

export default new AdminService()
