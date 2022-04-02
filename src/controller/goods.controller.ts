import type { Context } from 'koa'
import type { GoodsAttributes } from '../types/goods.types'
import type { ListAttributes } from '../types'

import goodsService from '../service/goods.service'
import errorTypes from '../constant/error-types'

class GoodsController {
  /**
   * 添加
   * @param ctx
   */
  public async create(ctx: Context) {
    const opt = ctx.request.body as GoodsAttributes

    try {
      await goodsService.create(opt)

      ctx.body = 'ok'
    } catch (error) {
      ctx.app.emit(
        'error',
        { ...errorTypes.paramsError, message: error.message },
        ctx
      )
    }
  }

  /**
   * 获取列表
   * @param ctx
   */
  public async getList(ctx: Context) {
    const listParams = ctx.request.query as ListAttributes
    if (listParams.query === '全部商品') {
      listParams.query = ''
    }

    try {
      const result = await goodsService.getList(listParams)

      ctx.body = result
    } catch (error) {
      ctx.app.emit(
        'error',
        { ...errorTypes.paramsError, message: error.message },
        ctx
      )
    }
  }

  /**
   * 通过id修改数据
   * @param ctx
   */
  public async updateById(ctx: Context) {
    const id = ctx.params.id as number
    const updateData = ctx.request.body as GoodsAttributes

    await goodsService.updateById(id, updateData)

    ctx.body = 'ok'
  }

  public async deleteById(ctx: Context) {
    const id = ctx.params.id as number

    try {
      await goodsService.deleteById(id)
      ctx.body = 'ok'
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * 获取商品详情
   */
  public async getGoodsInfoList(ctx: Context) {
    const id = parseInt(ctx.params.id)

    const result = await goodsService.getGoodsInfoList(id)

    ctx.body = result
  }
}

export default new GoodsController()
