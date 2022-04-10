import { CurrentUser } from '@libs/common/decorators/current-user.decorator'
import { Admin } from '@libs/database/models/admin.model'
import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ApiOperation } from '@nestjs/swagger'
import { AuthService } from './auth/auth.service'
import { LoginDto } from './auth/dto/login.dto'
import { LocalAuthGuard } from './auth/guards/local-auth.guard'

@Controller()
export class MangementController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService
  ) {}

  @Post('login/admin')
  @ApiOperation({ summary: '登录' })
  @UseGuards(LocalAuthGuard)
  async login(@Body() loginDto: LoginDto, @CurrentUser() user: Admin) {
    // 生成token
    const token = this.jwtService.sign(user)

    return { user, token }
  }
}
