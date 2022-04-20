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
import { CartService } from './cart.service'
import { CreateCartDto } from './dto/create-cart.dto'
import { UpdateCartDto } from './dto/update-cart.dto'

@Controller('page/cart')
@ApiTags('购物车')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOperation({ summary: '添加商品至购物车' })
  async create(
    @Body() createCartDto: CreateCartDto,
    @CurrentUser() user: User
  ) {
    // 查找之前是否已添加该产品，若已添加则修改count的值，若未添加则直接添加
    const result = await this.cartService.findOneByProductId(
      createCartDto.product_id,
      user.id
    )
    if (result) {
      createCartDto.count = result.count + createCartDto.count
      await this.cartService.update(
        createCartDto,
        createCartDto.product_id,
        user.id
      )
    } else {
      await this.cartService.create(createCartDto, user.id)
    }

    return 'ok'
  }

  @Get()
  async findAll(@CurrentUser() user: User) {
    return await this.cartService.findAll(user.id)
  }

  @Patch(':product_id')
  update(
    @Param('product_id') product_id: number,
    @Body() updateCartDto: UpdateCartDto,
    @CurrentUser() user: User
  ) {
    return this.cartService.update(updateCartDto, product_id, user.id)
  }

  @Delete(':product_id')
  remove(@Param('product_id') product_id: number, @CurrentUser() user: User) {
    return this.cartService.remove(product_id, user.id)
  }
}
