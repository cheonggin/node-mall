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
  BadRequestException,
  UseGuards
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { AdminService } from './admin.service'
import { CreateAdminDto } from './dto/create-admin.dto'
import { UpdateAdminDto } from './dto/update-admin.dto'

@Controller('admin')
@ApiTags('管理员')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @ApiOperation({ summary: '添加管理员' })
  async create(@Body() createAdminDto: CreateAdminDto) {
    try {
      await this.adminService.create(createAdminDto)
    } catch (error) {
      throw new BadRequestException(error.message)
    }
    return 'ok'
  }

  @Get()
  @ApiOperation({ summary: '获取管理员列表' })
  async findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return await this.adminService.findAll(paginationQueryDto)
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改管理员名称' })
  async update(
    @Param('id') id: number,
    @Body() updateAdminDto: UpdateAdminDto
  ) {
    return await this.adminService.update(id, updateAdminDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除管理员' })
  async remove(@Param('id') id: number) {
    return await this.adminService.remove(id)
  }
}
