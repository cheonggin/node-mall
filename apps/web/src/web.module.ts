import { CommonModule } from '@libs/common'
import { Module } from '@nestjs/common'
import { WebController } from './web.controller'
import { HomeModule } from './home/home.module'

@Module({
  imports: [CommonModule, HomeModule],
  controllers: [WebController]
})
export class WebModule {}
