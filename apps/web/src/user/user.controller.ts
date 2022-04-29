import { Controller, Post, Body, UseGuards, Patch } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { JwtAuthGuard } from '@libs/common/guards/jwt-auth.guard'
import { CurrentUser } from '@libs/common/decorators/current-user.decorator'
import { User } from './entities/user.entity'
import { UpdateUserAvatarDto } from './dto/update-user-avatar.dto'

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

  @Patch('/user/avatar')
  @ApiOperation({ summary: '更新用户头像' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async updateUserAvatar(
    @Body() updateUserAvatarDto: UpdateUserAvatarDto,
    @CurrentUser() user: User
  ) {
    // 更新用户的avatar_url
    await this.userService.updateAvatarByUserId(
      user.id,
      updateUserAvatarDto.avatar_url
    )

    return 'ok'
  }
}
