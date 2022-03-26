import Keyword from '../model/keyword.model'

class KeywordService {
  public async getKeyWordList() {
    const result = await Keyword.findAll({
      attributes: { exclude: ['create_at', 'update_at'] }
    })

    return result
  }
}

export default new KeywordService()
