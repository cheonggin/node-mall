import { Op } from 'sequelize'

import Goods from '../model/goods.model'

import type { GoodsAttributes } from '../types/goods.types'
import type { ListAttributes } from '../types'

class GoodsService {
  public async create(opt: GoodsAttributes) {
    const result = await Goods.create(opt)

    return result
  }

  public async getList(opt: ListAttributes) {
    const result = await Goods.findAndCountAll({
      where: {
        name: {
          [Op.like]: `%${opt.query}%`
        }
      },
      offset: parseInt(opt.offset),
      limit: parseInt(opt.limit),
      attributes: { exclude: ['create_at', 'update_at'] }
    })

    return result
  }

  public async updateById(id: number, opt: GoodsAttributes) {
    const result = await Goods.update(opt, { where: { id } })

    return result
  }

  public async deleteById(id: number) {
    const result = await Goods.destroy({
      where: { id }
    })

    return result
  }
}

export default new GoodsService()
