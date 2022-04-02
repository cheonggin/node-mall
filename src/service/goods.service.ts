import { Op } from 'sequelize'

import Goods from '../model/goods.model'
import GoodsInfo from '../model/goods_info.model'
import GoodsInfoBanner from '../model/goods_info_banner.model'
import GoodsInfoTab from '../model/goods_info_tab.model'
import GoodsInfoComment from '../model/goods_info_comment.model'

import { GoodsAttributes } from '../types/goods.types'
import { ListAttributes } from '../types'

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

  public async getGoodsInfoList(id: number) {
    const banner = await GoodsInfoBanner.findAll({
      where: { product_id: id },
      attributes: { exclude: ['create_at', 'update_at', 'product_id'] }
    })

    const goodsInfoData = await GoodsInfo.findOne({
      where: { product_id: id },
      attributes: { exclude: ['create_at', 'update_at'] }
    })

    const comment = await GoodsInfoComment.findOne({
      where: { product_id: id },
      attributes: {
        exclude: ['create_at', 'update_at', 'id']
      }
    })

    const tabs = await GoodsInfoTab.findAll({
      where: { product_id: id },
      attributes: { exclude: ['create_at', 'update_at', 'product_id'] }
    })

    return { banner, goodsInfoData, comment, tabs }
  }
}

export default new GoodsService()
