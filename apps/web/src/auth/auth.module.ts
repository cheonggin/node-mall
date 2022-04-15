import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserModule } from '../user/user.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStragety } from './strageties/local.stragety'

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStragety]
})
export class AuthModule {}
