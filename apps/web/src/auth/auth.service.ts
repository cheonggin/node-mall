import { Injectable } from '@nestjs/common'
import { LoginDto } from 'apps/mangement/src/auth/dto/login.dto'
import { compareSync } from 'bcrypt'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(loginDto: LoginDto) {
    const user = await this.userService.findOneByName(loginDto.name)

    if (user && compareSync(loginDto.password, user.password)) {
      const { password, ...result } = user.get({ plain: true }) // eslint-disable-line

      return result
    }

    return null
  }
}
