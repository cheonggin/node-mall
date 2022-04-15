import { CommonModule } from '@libs/common'
import { Module } from '@nestjs/common'
import { WebController } from './web.controller'
import { HomeModule } from './home/home.module'
import { SearchModule } from './search/search.module'
import { CategoryModule } from './category/category.module'
import { GoodsModule } from './goods/goods.module'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    CommonModule,
    HomeModule,
    SearchModule,
    CategoryModule,
    GoodsModule,
    UserModule,
    AuthModule
  ],
  controllers: [WebController]
})
export class WebModule {}
