import { Op } from 'sequelize'

import Category from '../model/category.model'
import CategoryProduct from '../model/category_product.model'

import type { CategoryAttributes } from '../types/category.types'
import type { ListAttributes } from '../types'

class CategoryService {
  public async create(opt: CategoryAttributes) {
    const result = await Category.create(opt)

    return result
  }

  public async getList(opt: ListAttributes) {
    const result = await Category.findAndCountAll({
      where: {
        name: {
          [Op.like]: `%${opt.query}%`
        }
      }
    })

    return result
  }

  public async updateById(id: number, opt: CategoryAttributes) {
    const result = await Category.update(opt, { where: { id } })

    return result
  }

  public async deleteById(id: number) {
    const result = await Category.destroy({
      where: { id }
    })
    await Category.destroy({ where: { pid: id } })

    return result
  }

  public async getCategoryList() {
    const result = await Category.findAll({
      where: {
        pid: null
      },
      attributes: { exclude: ['pid'] }
    })

    return result
  }

  public async getSubCategoryList(id: number) {
    const subCategory = await Category.findAll({
      where: {
        pid: id
      },
      attributes: { exclude: ['pid'] },
      include: { model: CategoryProduct }
    })
    const category = await Category.findOne({
      where: {
        id
      },
      attributes: { exclude: ['pid'] }
    })

    return { category, subCategory }
  }
}

export default new CategoryService()
