import { Op } from 'sequelize'

import Admin from '../model/admin.model'
import Role from '../model/role.model'

import type { AdminAttributes } from '../types/admin.types'
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
      attributes: { exclude: ['password'] },
      include: { model: Role }
    })

    return result
  }

  public async updateNameById(id: number, name: string, role_id: number) {
    const result = await Admin.update(
      { name, role_id },
      {
        where: { id }
      }
    )

    return result
  }

  public async deleteById(id: number) {
    const result = await Admin.destroy({ where: { id } })

    return result
  }
}

export default new AdminService()
