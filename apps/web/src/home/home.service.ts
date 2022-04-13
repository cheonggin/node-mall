import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { HomeBanner } from './entities/home-banner.entity'
import { HomeRecommend } from './entities/home-recommend.entity'
import { HomeShortcut } from './entities/home-shortcut.entity'

@Injectable()
export class HomeService {
  constructor(
    @InjectModel(HomeBanner) private readonly bannerModel: typeof HomeBanner,
    @InjectModel(HomeShortcut)
    private readonly shortcutModel: typeof HomeShortcut,
    @InjectModel(HomeRecommend)
    private readonly recommendModel: typeof HomeRecommend
  ) {}

  async getBannerList() {
    return await this.bannerModel.findAll()
  }

  async getShortcutList() {
    return await this.shortcutModel.findAll()
  }

  async getRecommendList() {
    return await this.recommendModel.findAll()
  }
}
