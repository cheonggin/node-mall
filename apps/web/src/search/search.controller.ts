import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { Controller, Get, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { SearchService } from './search.service'

@Controller('page')
@ApiTags('搜索')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('keyword')
  @ApiOperation({ summary: '获取搜索关键词' })
  async getKeywords() {
    return await this.searchService.getKeywords()
  }

  @Get('goods')
  @ApiOperation({ summary: '获取搜索产品列表' })
  async getGoodsList(@Query() paginationQueryDto: PaginationQueryDto) {
    return await this.searchService.getGoodsList(paginationQueryDto)
  }
}
