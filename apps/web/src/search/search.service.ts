import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { Goods } from '@libs/database/models/goods.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { Search } from './entities/search.entity'

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Search) private readonly searchModel: typeof Search,
    @InjectModel(Goods) private readonly goodsModel: typeof Goods
  ) {}

  async getKeywords() {
    return await this.searchModel.findAll()
  }

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
}
