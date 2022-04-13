import { Module } from '@nestjs/common'
import { SearchService } from './search.service'
import { SearchController } from './search.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Search } from './entities/search.entity'

@Module({
  imports: [SequelizeModule.forFeature([Search])],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
