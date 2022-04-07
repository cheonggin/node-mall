import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from '@nestjs/common'
import { RoleService } from './role.service'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'
import { PaginationQueryDto } from '@libs/common/dto/pagination-query.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('role')
@ApiTags('角色')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiOperation({ summary: '添加角色' })
  async create(@Body() createRoleDto: CreateRoleDto) {
    await this.roleService.create(createRoleDto)
    return 'ok'
  }

  @Get()
  @ApiOperation({ summary: '获取角色列表' })
  async findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return await this.roleService.findAll(paginationQueryDto)
  }

  @Get(':id')
  @ApiOperation({ summary: '查询单个角色的菜单权限' })
  async findOne(@Param('id') id: number) {
    return this.roleService.findOne(id)
  }

  @Patch(':id')
  @ApiOperation({ summary: '修改角色' })
  async update(@Param('id') id: number, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除角色' })
  async remove(@Param('id') id: number) {
    return this.roleService.remove(id)
  }
}
