import { CommonModule } from '@libs/common'
import { Module } from '@nestjs/common'
import { WebController } from './web.controller'
import { HomeModule } from './home/home.module'
import { SearchModule } from './search/search.module'
import { CategoryModule } from './category/category.module'
import { GoodsModule } from './goods/goods.module'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { FileModule } from './file/file.module'
import { AddressModule } from './address/address.module'
import { CartModule } from './cart/cart.module'

@Module({
  imports: [
    CommonModule,
    HomeModule,
    SearchModule,
    CategoryModule,
    GoodsModule,
    UserModule,
    AuthModule,
    FileModule,
    AddressModule,
    CartModule
  ],
  controllers: [WebController]
})
export class WebModule {}
