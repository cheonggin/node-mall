import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { genSaltSync, hashSync } from 'bcrypt'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async create(createUserDto: CreateUserDto) {
    const salt = genSaltSync(10)
    createUserDto.password = hashSync(createUserDto.password, salt)

    return await this.userModel.create(createUserDto)
  }
}
