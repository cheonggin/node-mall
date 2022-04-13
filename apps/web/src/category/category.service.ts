import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Category } from '@libs/database/models/category.model'
import { CategoryDetail } from './entities/category-detail.entity'

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private readonly categoryModel: typeof Category,
    @InjectModel(CategoryDetail)
    private readonly categoryDetailModel: typeof CategoryDetail
  ) {}

  async getCategoryList() {
    return await this.categoryModel.findAll({
      where: { pid: null },
      attributes: { exclude: ['pid'] }
    })
  }

  async findOne(id: number) {
    return await this.categoryModel.findOne({
      where: { id },
      attributes: { exclude: ['pid'] }
    })
  }

  async getSubCategoryList(id: number) {
    return await this.categoryModel.findAll({
      where: { pid: id },
      attributes: { exclude: ['pid'] },
      include: { model: this.categoryDetailModel }
    })
  }
}
