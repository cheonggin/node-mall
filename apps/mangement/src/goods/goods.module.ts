import { Module } from '@nestjs/common'
import { GoodsService } from './goods.service'
import { GoodsController } from './goods.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Goods } from '@libs/database/models/goods.model'

@Module({
  imports: [SequelizeModule.forFeature([Goods])],
  controllers: [GoodsController],
  providers: [GoodsService]
})
export class GoodsModule {}
