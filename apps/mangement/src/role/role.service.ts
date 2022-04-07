import { Role } from '@libs/database/models/role.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'
import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { Menu } from '@libs/database/models/menu.model'

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(Role) private readonly roleModel: typeof Role,
    @InjectModel(Menu) private readonly menuModel: typeof Menu
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.roleModel.create(createRoleDto)
  }

  async findAll(paginationQueryDto: PaginationQueryDto) {
    console.log(paginationQueryDto)
    const { offset, limit, query } = paginationQueryDto
    return await this.roleModel.findAndCountAll({
      limit,
      offset,
      where: { name: { [Op.like]: `%${query && query.trim()}%` } }
    })
  }

  async findOne(id: number) {
    const { checkedKeys, halfCheckedKeys } = await this.roleModel.findOne({
      where: { id }
    })

    return await this.menuModel.findAll({
      where: { id: { [Op.in]: [...checkedKeys, ...halfCheckedKeys] } }
    })
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.roleModel.update(updateRoleDto, { where: { id } })
  }

  async remove(id: number) {
    return this.roleModel.destroy({ where: { id } })
  }
}
