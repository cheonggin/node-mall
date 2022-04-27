import { join } from 'path'
import { CommonModule } from '@libs/common'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { MangementController } from './mangement.controller'
import { MenuModule } from './menu/menu.module'
import { RoleModule } from './role/role.module'
import { AdminModule } from './admin/admin.module'
import { AuthModule } from './auth/auth.module'
import { CategoryModule } from './category/category.module'
import { GoodsModule } from './goods/goods.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/mangement')
    }),
    CommonModule,
    MenuModule,
    RoleModule,
    AdminModule,
    AuthModule,
    CategoryModule,
    GoodsModule
  ],
  controllers: [MangementController]
})
export class MangementModule {}
