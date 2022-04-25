import { Controller, Post, Body, UseGuards } from '@nestjs/common'
import { OrderService } from './order.service'
import { BodyDto } from './dto/create-order.dto'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '@libs/common/guards/jwt-auth.guard'
import { CurrentUser } from '@libs/common/decorators/current-user.decorator'
import { User } from '../user/entities/user.entity'

@Controller('page/order')
@ApiTags('用户订单')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: '添加用户订单，返回订单id' })
  async create(@Body() bodyDto: BodyDto, @CurrentUser() user: User) {
    // 生成订单
    const order_number = this.generateOrderNumber()
    const orderResult = await this.orderService.createOrder({
      order_number,
      user_id: user.id,
      address_id: bodyDto.address_id
    })

    const list = bodyDto.list.map(item => {
      item.order_id = orderResult.id

      return item
    })

    await this.orderService.createOrderGoods(list)

    return { order_id: orderResult.id, order_number: orderResult.order_number }
  }

  // @Get(':id')
  // @ApiOperation({ summary: '根据订单id获取订单信息' })
  // async findOne(@Param('id') id: number, @CurrentUser() user: User) {
  //   return await this.orderService.findOne(id, user.id)
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: '根据订单id删除订单' })
  // async remove(@Param('id') id: number, @CurrentUser() user: User) {
  //   await this.orderService.remove(id, user.id)

  //   return 'ok'
  // }

  // 生成订单号order_id，规则：时间戳 + 6为随机数
  private generateOrderNumber() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const hour = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    const mon = this.setTimeDateFmt(month)
    const d = this.setTimeDateFmt(day)
    const h = this.setTimeDateFmt(hour)
    const m = this.setTimeDateFmt(minutes)
    const s = this.setTimeDateFmt(seconds)

    const yyyyMMddHHmmss = `${year}${mon}${d}${h}${m}${s}`

    // 生成随机6位数
    const randomNumber = Math.round(Math.random() * 1000000).toString()

    return yyyyMMddHHmmss + '_' + randomNumber
  }

  private setTimeDateFmt(s: number) {
    return s < 10 ? '0' + s : s + ''
  }
}
