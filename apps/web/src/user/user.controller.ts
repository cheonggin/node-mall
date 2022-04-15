import { Controller, Post, Body } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller()
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: '注册用户' })
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto)
    return 'ok'
  }
}
