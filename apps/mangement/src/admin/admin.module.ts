import { Module } from '@nestjs/common'
import { AdminService } from './admin.service'
import { AdminController } from './admin.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Admin } from '@libs/database/models/admin.model'
import { Role } from '@libs/database/models/role.model'

@Module({
  imports: [SequelizeModule.forFeature([Admin, Role])],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService]
})
export class AdminModule {}
