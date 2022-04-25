import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Order } from './entities/order.entity'
import { OrderGoods } from './entities/order-goods.entity'
import { Goods } from '@libs/database/models/goods.model'

@Module({
  imports: [SequelizeModule.forFeature([Order, OrderGoods, Goods])],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule {}
