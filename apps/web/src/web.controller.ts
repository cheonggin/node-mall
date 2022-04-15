import { CurrentUser } from '@libs/common/decorators/current-user.decorator'
import { LocalAuthGuard } from '@libs/common/guards/local-auth.guard'
import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ApiOperation } from '@nestjs/swagger'
import { LoginDto } from 'apps/mangement/src/auth/dto/login.dto'
import { User } from './user/entities/user.entity'

@Controller()
export class WebController {
  constructor(private readonly jwtService: JwtService) {}

  @Post('login')
  @ApiOperation({ summary: '登录' })
  @UseGuards(LocalAuthGuard)
  async login(@Body() loginDto: LoginDto, @CurrentUser() user: User) {
    // 生成token
    const token = this.jwtService.sign({ id: user.id, name: user.name })

    return { user, token }
  }
}
