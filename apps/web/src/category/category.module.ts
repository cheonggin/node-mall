import { Module } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryController } from './category.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { CategoryDetail } from './entities/category-detail.entity'
import { Category } from '@libs/database/models/category.model'

@Module({
  imports: [SequelizeModule.forFeature([Category, CategoryDetail])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
