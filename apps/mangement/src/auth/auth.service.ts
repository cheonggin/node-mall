import { Injectable } from '@nestjs/common'
import { compareSync } from 'bcrypt'
import { AdminService } from '../admin/admin.service'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(private readonly adminService: AdminService) {}

  async validateAdmin(loginDto: LoginDto) {
    const user = await this.adminService.findOneByName(loginDto.name)
    if (user && compareSync(loginDto.password, user.password)) {
      const { password, ...result } = user.get({ plain: true }) // eslint-disable-line
      return result
    }
    return null
  }
}
