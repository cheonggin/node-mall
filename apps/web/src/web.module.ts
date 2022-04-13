import { CommonModule } from '@libs/common'
import { Module } from '@nestjs/common'
import { WebController } from './web.controller'
import { HomeModule } from './home/home.module'
import { SearchModule } from './search/search.module'
import { CategoryModule } from './category/category.module'

@Module({
  imports: [CommonModule, HomeModule, SearchModule, CategoryModule],
  controllers: [WebController]
})
export class WebModule {}
