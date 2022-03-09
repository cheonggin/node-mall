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
      }
    })

    return result
  }

  public async updateById(id: number, opt: MenuAttributes) {
    const result = await Menu.update(opt, { where: { id } })

    return result
  }

  public async deleteById(id: number) {
    const result = await Menu.destroy({
      where: { id }
    })
    await Menu.destroy({ where: { pid: id } })

    return result
  }
}

export default new MenuService()
