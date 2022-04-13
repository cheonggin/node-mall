import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CategoryService } from './category.service'

@Controller('page/category')
@ApiTags('分类')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @ApiOperation({ summary: '获取一级分类数据' })
  async getCategoryList() {
    return await this.categoryService.getCategoryList()
  }

  @Get(':id')
  @ApiOperation({ summary: '根据一级分类id获取对应分类详情' })
  async getCategoryDetail(@Param('id') id: number) {
    const category = await this.categoryService.findOne(id)
    const subCategory = await this.categoryService.getSubCategoryList(id)
    return { category, subCategory }
  }
}
