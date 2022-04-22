import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { Controller, Get, Param, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { GoodsService } from './goods.service'

@Controller('page/goods')
@ApiTags('商品')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get()
  @ApiOperation({ summary: '获取搜索产品列表' })
  async getGoodsList(@Query() paginationQueryDto: PaginationQueryDto) {
    return await this.goodsService.getGoodsList(paginationQueryDto)
  }

  @Get(':id')
  @ApiOperation({ summary: '根据id获取产品详情' })
  async getGoodsInfo(@Param('id') id: number) {
    const result = await this.goodsService.findOne(id)
    const { bannerList, detail, comment, tabs, ...product } = result.get({
      plain: true
    })

    return { bannerList, detail, comment, tabs, product }
  }
}
