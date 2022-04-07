import { CommonModule } from '@libs/common'
import { Module } from '@nestjs/common'
import { MangementController } from './mangement.controller'
import { MangementService } from './mangement.service'
import { MenuModule } from './menu/menu.module'

@Module({
  imports: [CommonModule, MenuModule],
  controllers: [MangementController],
  providers: [MangementService]
})
export class MangementModule {}
