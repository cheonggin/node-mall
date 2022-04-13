import { CommonModule } from '@libs/common'
import { Module } from '@nestjs/common'
import { WebController } from './web.controller'
import { HomeModule } from './home/home.module'
import { SearchModule } from './search/search.module'

@Module({
  imports: [CommonModule, HomeModule, SearchModule],
  controllers: [WebController]
})
export class WebModule {}
