import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { JwtAuthGuard } from '@libs/common/guards/jwt-auth.guard'
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Controller('category')
@ApiTags('分类')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: '添加分类' })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    await this.categoryService.create(createCategoryDto)
    return 'ok'
  }

  @Get()
  @ApiOperation({ summary: '获取分类列表' })
  async findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return await this.categoryService.findAll(paginationQueryDto.query)
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改分类' })
  async update(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    await this.categoryService.update(id, updateCategoryDto)
    return 'ok'
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除分类' })
  async remove(@Param('id') id: number) {
    await this.categoryService.remove(id)
    return 'ok'
  }
}
