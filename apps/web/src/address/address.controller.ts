import { CurrentUser } from '@libs/common/decorators/current-user.decorator'
import { JwtAuthGuard } from '@libs/common/guards/jwt-auth.guard'
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { User } from '../user/entities/user.entity'
import { AddressService } from './address.service'
import { CreateAddressDto } from './dto/create-address.dto'
import { UpdateAddressDto } from './dto/update-address.dto'

@Controller('page/address')
@ApiTags('用户收货地址')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @ApiOperation({ summary: '添加用户收货地址' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createAddressDto: CreateAddressDto,
    @CurrentUser() user: User
  ) {
    if (createAddressDto.isDefault) {
      // 若当前收货地址中isDefault为true，则将该用户的其它收货地址的isDefault全部修改为false后再添加此收货地址
      this.addressService.updateAllIsDefault(user.id)
    }
    await this.addressService.create(user.id, createAddressDto)

    return 'ok'
  }

  @Get()
  @ApiOperation({ summary: '获取用户收货地址列表' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findAll(@CurrentUser() user: User) {
    return await this.addressService.findAll(user.id)
  }

  @Get(':id')
  @ApiOperation({ summary: '根据id获取单个地址信息' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: number, @CurrentUser() user: User) {
    return await this.addressService.findOne(id, user.id)
  }

  @Patch(':id')
  @ApiOperation({ summary: '根据id修改单个地址信息' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: number,
    @Body() updateAddressDto: UpdateAddressDto,
    @CurrentUser() user: User
  ) {
    if (updateAddressDto.isDefault) {
      // 若要修改的收货地址中isDefault为true，则将该用户的其它收货地址的isDefault全部修改为false后再修改此收货地址
      this.addressService.updateAllIsDefault(user.id)
    }
    await this.addressService.update(id, updateAddressDto, user.id)

    return 'ok'
  }

  @Delete(':id')
  @ApiOperation({ summary: '根据id删除单个地址信息' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: number, @CurrentUser() user: User) {
    await this.addressService.remove(id, user.id)
    return 'ok'
  }
}
