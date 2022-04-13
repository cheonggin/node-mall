import { Module } from '@nestjs/common'
import { HomeService } from './home.service'
import { HomeController } from './home.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { HomeBanner } from './entities/home-banner.entity'
import { HomeShortcut } from './entities/home-shortcut.entity'
import { HomeRecommend } from './entities/home-recommend.entity'

@Module({
  imports: [
    SequelizeModule.forFeature([HomeBanner, HomeShortcut, HomeRecommend])
  ],
  controllers: [HomeController],
  providers: [HomeService]
})
export class HomeModule {}
