import { Goods } from '@libs/database/models/goods.model'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateOrderGoodsDto } from './dto/create-order-goods.dto'
import { CreateOrderDto } from './dto/create-order.dto'
import { OrderGoods } from './entities/order-goods.entity'
import { Order } from './entities/order.entity'

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private readonly orderModel: typeof Order,
    @InjectModel(OrderGoods)
    private readonly orderGoodsModel: typeof OrderGoods,
    @InjectModel(Goods) private readonly goodsModel: typeof Goods
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    return await this.orderModel.create(createOrderDto)
  }

  async createOrderGoods(createOrderGoodsDto: CreateOrderGoodsDto[]) {
    return await this.orderGoodsModel.bulkCreate(createOrderGoodsDto)
  }

  async updateOrderPayStatus(order_number: string) {
    return await this.orderModel.update(
      { pay_status: 1 },
      { where: { order_number } }
    )
  }

  async findAll() {
    return 'ok'
  }

  async findOne() {
    return 'ok'
  }

  async remove() {
    return 'ok'
  }
}
