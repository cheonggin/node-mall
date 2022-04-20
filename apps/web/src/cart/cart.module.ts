import { Module } from '@nestjs/common'
import { CartService } from './cart.service'
import { CartController } from './cart.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Cart } from './entities/cart.entity'
import { Goods } from '@libs/database/models/goods.model'

@Module({
  imports: [SequelizeModule.forFeature([Cart, Goods])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
