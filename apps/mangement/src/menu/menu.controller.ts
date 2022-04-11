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
import { MenuService } from './menu.service'
import { CreateMenuDto } from './dto/create-menu.dto'
import { UpdateMenuDto } from './dto/update-menu.dto'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { JwtAuthGuard } from '@libs/common/guards/jwt-auth.guard'

@Controller('menu')
@ApiTags('路由菜单')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({ summary: '添加路由菜单' })
  async create(@Body() createMenuDto: CreateMenuDto) {
    await this.menuService.create(createMenuDto)
    return 'ok'
  }

  @Get()
  @ApiOperation({ summary: '获取路由菜单列表' })
  async findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    const { query } = paginationQueryDto
    return await this.menuService.findAll(query && query.trim())
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改路由菜单' })
  async update(@Param('id') id: number, @Body() updateMenuDto: UpdateMenuDto) {
    await this.menuService.update(id, updateMenuDto)
    return 'ok'
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除路由菜单' })
  async remove(@Param('id') id: number) {
    await this.menuService.remove(id)
    return 'ok'
  }
}
