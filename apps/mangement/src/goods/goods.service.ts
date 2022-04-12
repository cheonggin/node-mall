import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { Goods } from '@libs/database/models/goods.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { CreateGoodDto } from './dto/create-good.dto'
import { UpdateGoodDto } from './dto/update-good.dto'

@Injectable()
export class GoodsService {
  constructor(@InjectModel(Goods) private readonly goodsModel: typeof Goods) {}

  async create(createGoodDto: CreateGoodDto) {
    return await this.goodsModel.create(createGoodDto)
  }

  async findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset, query } = paginationQueryDto

    return await this.goodsModel.findAndCountAll({
      where: { name: { [Op.like]: `%${query && query.trim()}%` } },
      limit,
      offset
    })
  }

  async update(id: number, updateGoodDto: UpdateGoodDto) {
    return await this.goodsModel.update(updateGoodDto, { where: { id } })
  }

  async remove(id: number) {
    return await this.goodsModel.destroy({ where: { id } })
  }
}
