import { Module } from '@nestjs/common'
import { RoleService } from './role.service'
import { RoleController } from './role.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Role } from '@libs/database/models/role.model'
import { Menu } from '@libs/database/models/menu.model'

@Module({
  imports: [SequelizeModule.forFeature([Role, Menu])],
  controllers: [RoleController],
  providers: [RoleService]
})
export class RoleModule {}
