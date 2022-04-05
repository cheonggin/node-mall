import { DatabaseModule } from '@libs/database'
import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CommonService } from './common.service'

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule],
  providers: [CommonService],
  exports: [CommonService]
})
export class CommonModule {}
