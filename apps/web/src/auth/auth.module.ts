import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserModule } from '../user/user.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStragety } from './strageties/local.stragety'
import { JwtStragety } from '@libs/common/strategies/jwt.stragety'

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStragety, JwtStragety]
})
export class AuthModule {}
