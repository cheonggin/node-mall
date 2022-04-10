import { BadRequestException, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { IStrategyOptions, Strategy } from 'passport-local'
import { AuthService } from '../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'name',
      passwordField: 'password'
    } as IStrategyOptions)
  }

  async validate(name: string, password: string) {
    const user = await this.authService.validateAdmin({ name, password })

    if (!user) throw new BadRequestException('用户名不存在或密码错误')
    return user
  }
}
