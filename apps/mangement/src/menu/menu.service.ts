import { Menu } from '@libs/database/models/menu.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { CreateMenuDto } from './dto/create-menu.dto'
import { UpdateMenuDto } from './dto/update-menu.dto'

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu) private readonly menuModel: typeof Menu) {}

  async create(createMenuDto: CreateMenuDto) {
    return await this.menuModel.create(createMenuDto)
  }

  async findAll(query: string) {
    return await this.menuModel.findAndCountAll({
      where: { name: { [Op.like]: `%${query}%` } }
    })
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    return await this.menuModel.update(updateMenuDto, { where: { id } })
  }

  async remove(id: number) {
    return this.menuModel.destroy({ where: { id } })
  }
}
