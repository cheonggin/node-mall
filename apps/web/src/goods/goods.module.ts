import { Module } from '@nestjs/common'
import { GoodsService } from './goods.service'
import { GoodsController } from './goods.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Goods } from '@libs/database/models/goods.model'
import { GoodsDetail } from './entities/goods-detail.entity'
import { GoodsDetailBanner } from './entities/goods-detail-banner.entity'
import { GoodsDetailComment } from './entities/goods-detail-comment.entity'
import { GoodsDetailTab } from './entities/goods-detail-tab.entity'

@Module({
  imports: [
    SequelizeModule.forFeature([
      Goods,
      GoodsDetail,
      GoodsDetailBanner,
      GoodsDetailComment,
      GoodsDetailTab
    ])
  ],
  controllers: [GoodsController],
  providers: [GoodsService]
})
export class GoodsModule {}
