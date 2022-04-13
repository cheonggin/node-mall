import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { HomeService } from './home.service'

@Controller('page/home')
@ApiTags('首页')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @ApiOperation({ summary: '获取首页数据' })
  async findAll() {
    const bannerList = await this.homeService.getBannerList()
    const shortcutList = await this.homeService.getShortcutList()
    const recommendList = await this.homeService.getRecommendList()

    return { bannerList, shortcutList, recommendList }
  }
}
