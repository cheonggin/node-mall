import { Op } from 'sequelize'

import Menu from '../model/menu.model'

import type { MenuAttributes } from '../types/Menu.types'
import type { ListAttributes } from '../types'

class MenuService {
  public async create(menuParams: MenuAttributes) {
    const result = await Menu.create(menuParams)

    return result
  }

  public async getList(opt: ListAttributes) {
    const result = await Menu.findAndCountAll({
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

export default new MenuService()
