import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CommonService } from './common.service'

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [CommonService],
  exports: [CommonService]
})
export class CommonModule {}
