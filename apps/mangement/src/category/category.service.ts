import { Category } from '@libs/database/models/category.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private readonly categoryModel: typeof Category
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryModel.create(createCategoryDto)
  }

  async findAll(query: string) {
    return await this.categoryModel.findAndCountAll({
      where: { name: { [Op.like]: `%${query && query.trim()}%` } }
    })
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryModel.update(updateCategoryDto, { where: { id } })
  }

  async remove(id: number) {
    return await this.categoryModel.destroy({ where: { id } })
  }
}
