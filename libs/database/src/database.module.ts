import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { CategoryDetail } from 'apps/web/src/category/entities/category-detail.entity'
import { GoodsDetailBanner } from 'apps/web/src/goods/entities/goods-detail-banner.entity'
import { GoodsDetailComment } from 'apps/web/src/goods/entities/goods-detail-comment.entity'
import { GoodsDetailTab } from 'apps/web/src/goods/entities/goods-detail-tab.entity'
import { GoodsDetail } from 'apps/web/src/goods/entities/goods-detail.entity'
import { DatabaseService } from './database.service'

const models = SequelizeModule.forFeature([
  CategoryDetail,
  GoodsDetailBanner,
  GoodsDetailComment,
  GoodsDetailTab,
  GoodsDetail
])

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory() {
        return {
          dialect: 'mysql',
          host: process.env.DATABASE_HOST,
          port: +process.env.DATABASE_PORT,
          username: process.env.DATABASE_USERNAME,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          autoLoadModels: true,
          synchronize: true
        }
      }
    }),
    models
  ],
  providers: [DatabaseService],
  exports: [DatabaseService, models]
})
export class DatabaseModule {}
