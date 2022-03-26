import type { Context } from 'koa'

import keywordService from '../service/keyword.service'

class KeywordController {
  public async getKeyWordList(ctx: Context) {
    const result = await keywordService.getKeyWordList()

    ctx.body = result
  }
}

export default new KeywordController()
