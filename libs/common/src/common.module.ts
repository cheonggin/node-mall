import { DatabaseModule } from '@libs/database'
import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { CommonService } from './common.service'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '1d' }
    })
  ],
  providers: [CommonService],
  exports: [CommonService, JwtModule]
})
export class CommonModule {}
