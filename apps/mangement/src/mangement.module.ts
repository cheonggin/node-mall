import { CommonModule } from '@libs/common'
import { Module } from '@nestjs/common'
import { MangementController } from './mangement.controller'
import { MenuModule } from './menu/menu.module'
import { RoleModule } from './role/role.module'
import { AdminModule } from './admin/admin.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [CommonModule, MenuModule, RoleModule, AdminModule, AuthModule],
  controllers: [MangementController]
})
export class MangementModule {}
