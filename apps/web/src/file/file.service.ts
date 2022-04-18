import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateAvatarDto } from './dto/create-avatar.dto'
import { UpdateAvatarDto } from './dto/update-avatar.dto'
import { Avatar } from './entities/avatar.entity'

@Injectable()
export class FileService {
  constructor(
    @InjectModel(Avatar) private readonly avatarModel: typeof Avatar
  ) {}

  async createAvatar(createAvatarDto: CreateAvatarDto) {
    return await this.avatarModel.create(createAvatarDto)
  }

  async updateAvatar(updateAvatarDto: UpdateAvatarDto) {
    return await this.avatarModel.update(updateAvatarDto, {
      where: { user_id: updateAvatarDto.user_id }
    })
  }

  async findOne(user_id: number) {
    return await this.avatarModel.findOne({ where: { user_id } })
  }
}
