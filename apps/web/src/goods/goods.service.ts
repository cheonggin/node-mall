import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { Goods } from '@libs/database/models/goods.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { GoodsDetail } from './entities/goods-detail.entity'
import { GoodsDetailBanner } from './entities/goods-detail-banner.entity'
import { GoodsDetailComment } from './entities/goods-detail-comment.entity'
import { GoodsDetailTab } from './entities/goods-detail-tab.entity'

@Injectable()
export class GoodsService {
  constructor(
    @InjectModel(Goods) private readonly goodsModel: typeof Goods,
    @InjectModel(GoodsDetail)
    private readonly goodsDetailModel: typeof GoodsDetail,
    @InjectModel(GoodsDetailBanner)
    private readonly goodsBannerModel: typeof GoodsDetailBanner,
    @InjectModel(GoodsDetailComment)
    private readonly goodsCommentModel: typeof GoodsDetailComment,
    @InjectModel(GoodsDetailTab)
    private readonly goodsTabModel: typeof GoodsDetailTab
  ) {}

  async getGoodsList(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset } = paginationQueryDto
    let { query } = paginationQueryDto

    if (query === '全部商品') {
      query = ''
    }

    return await this.goodsModel.findAndCountAll({
      where: { name: { [Op.like]: `%${query && query.trim()}%` } },
      limit,
      offset
    })
  }

  async findOne(id: number) {
    return await this.goodsModel.findOne({
      where: { id },
      include: [
        {
          model: this.goodsBannerModel,
          attributes: { exclude: ['create_at', 'update_at', 'product_id'] }
        },
        {
          model: this.goodsDetailModel,
          attributes: { exclude: ['create_at', 'update_at', 'product_id'] }
        },
        {
          model: this.goodsCommentModel,
          attributes: { exclude: ['create_at', 'update_at', 'product_id'] }
        },
        {
          model: this.goodsTabModel,
          attributes: { exclude: ['create_at', 'update_at', 'product_id'] }
        }
      ],
      attributes: { exclude: ['create_at', 'update_at'] }
    })
  }
}
