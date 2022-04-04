import { Module } from '@nestjs/common'
import { MangementController } from './mangement.controller'
import { MangementService } from './mangement.service'

@Module({
  imports: [],
  controllers: [MangementController],
  providers: [MangementService]
})
export class MangementModule {}
