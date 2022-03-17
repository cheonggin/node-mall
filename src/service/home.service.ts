import Banner from '../model/banner.model'
import Recommend from '../model/recommend.model'
import Shortcut from '../model/shortcut.model'

class HomeService {
  public async getBannerList() {
    const result = await Banner.findAll()

    return result
  }

  public async getShortcutList() {
    const result = await Shortcut.findAll()

    return result
  }

  public async getRecommendList() {
    const result = await Recommend.findAll()

    return result
  }
}

export default new HomeService()
