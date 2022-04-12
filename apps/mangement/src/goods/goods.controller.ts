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
import { GoodsService } from './goods.service'
import { CreateGoodDto } from './dto/create-good.dto'
import { UpdateGoodDto } from './dto/update-good.dto'
import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '@libs/common/guards/jwt-auth.guard'

@Controller('goods')
@ApiTags('产品')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Post()
  @ApiOperation({ summary: '添加产品' })
  async create(@Body() createGoodDto: CreateGoodDto) {
    await this.goodsService.create(createGoodDto)
    return 'ok'
  }

  @Get()
  @ApiOperation({ summary: '获取产品列表' })
  async findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return await this.goodsService.findAll(paginationQueryDto)
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改产品' })
  async update(@Param('id') id: number, @Body() updateGoodDto: UpdateGoodDto) {
    await this.goodsService.update(id, updateGoodDto)
    return 'ok'
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除产品' })
  async remove(@Param('id') id: number) {
    await this.goodsService.remove(id)
    return 'ok'
  }
}
