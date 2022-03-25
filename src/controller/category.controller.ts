import type { Context } from 'koa'
import type { CategoryAttributes } from '../types/category.types'
import type { ListAttributes } from '../types'

import categoryService from '../service/category.service'
import errorTypes from '../constant/error-types'

class CategoryController {
  /**
   * 添加菜单
   * @param ctx
   */
  public async create(ctx: Context) {
    const opt = ctx.request.body as CategoryAttributes

    try {
      await categoryService.create(opt)

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
   * 获取菜单列表
   * @param ctx
   */
  public async getList(ctx: Context) {
    const listParams = ctx.request.query as ListAttributes

    try {
      const result = await categoryService.getList(listParams)

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
    const updateData = ctx.request.body as CategoryAttributes

    await categoryService.updateById(id, updateData)

    ctx.body = 'ok'
  }

  public async deleteById(ctx: Context) {
    const id = ctx.params.id as number

    try {
      await categoryService.deleteById(id)
      ctx.body = 'ok'
    } catch (error) {
      console.log(error)
    }
  }

  public async getCategoryList(ctx: Context) {
    const result = await categoryService.getCategoryList()

    ctx.body = result
  }

  public async getSubCategoryList(ctx: Context) {
    const id = ctx.params.id as number
    const result = await categoryService.getSubCategoryList(id)

    ctx.body = result
  }
}

export default new CategoryController()
