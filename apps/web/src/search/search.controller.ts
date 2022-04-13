import { Controller, Get } from '@nestjs/common'
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
}
