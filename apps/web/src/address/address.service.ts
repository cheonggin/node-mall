import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'
import { Address } from './entities/address.entity'

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address) private readonly addressModel: typeof Address
  ) {}

  async create(user_id: number, createAddressDto: CreateAddressDto) {
    return await this.addressModel.create({ ...createAddressDto, user_id })
  }

  async findAll(user_id: number) {
    return await this.addressModel.findAll({
      where: { user_id },
      attributes: { exclude: ['create_at', 'update_at', 'user_id'] }
    })
  }

  async findOne(id: number, user_id: number) {
    return await this.addressModel.findOne({
      where: { id, user_id },
      attributes: { exclude: ['create_at', 'update_at', 'user_id'] }
    })
  }

  async update(
    id: number,
    updateAddressDto: UpdateAddressDto,
    user_id: number
  ) {
    return await this.addressModel.update(updateAddressDto, {
      where: { id, user_id }
    })
  }

  async updateAllIsDefault(user_id: number) {
    return await this.addressModel.update(
      { isDefault: false },
      { where: { user_id } }
    )
  }

  async remove(id: number, user_id: number) {
    return await this.addressModel.destroy({ where: { id, user_id } })
  }
}
