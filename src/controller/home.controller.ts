import type { Context } from 'koa'
import homeService from '../service/home.service'

class HomeController {
  public async getList(ctx: Context) {
    const bannerList = await homeService.getBannerList()
    const shortcutList = await homeService.getShortcutList()
    const recommendList = await homeService.getRecommendList()

    ctx.body = { bannerList, shortcutList, recommendList }
  }
}

export default new HomeController()
