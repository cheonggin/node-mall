import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { Admin } from '@libs/database/models/admin.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Op } from 'sequelize'
import { genSaltSync, hashSync } from 'bcrypt'
import { CreateAdminDto } from './dto/create-admin.dto'
import { UpdateAdminDto } from './dto/update-admin.dto'
import { Role } from '@libs/database/models/role.model'

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private readonly adminModel: typeof Admin,
    @InjectModel(Role) private readonly roleModel: typeof Role
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const salt = genSaltSync(10)
    createAdminDto.password = hashSync(createAdminDto.password, salt)
    return await this.adminModel.create(createAdminDto)
  }

  async findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset, query } = paginationQueryDto

    return await this.adminModel.findAndCountAll({
      where: { name: { [Op.like]: `%${query && query.trim()}%` } },
      limit,
      offset,
      attributes: { exclude: ['password'] },
      include: [this.roleModel]
    })
  }

  /**
   * 通过用户名查询用户信息
   * @param name 用户名
   * @returns user
   */
  async findOneByName(name: string) {
    return await this.adminModel.findOne({
      where: { name }
    })
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return await this.adminModel.update(updateAdminDto, { where: { id } })
  }

  async remove(id: number) {
    return this.adminModel.destroy({ where: { id } })
  }
}
