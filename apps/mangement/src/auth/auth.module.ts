import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { AdminModule } from '../admin/admin.module'
import { AuthService } from './auth.service'
import { JwtStragety } from '../../../../libs/common/src/strategies/jwt.stragety'
import { LocalStrategy } from './strategies/local.stragety'

@Module({
  imports: [AdminModule, PassportModule],
  providers: [AuthService, LocalStrategy, JwtStragety],
  exports: [AuthService]
})
export class AuthModule {}
