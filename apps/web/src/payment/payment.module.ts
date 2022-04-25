import { Module } from '@nestjs/common'
import { OrderModule } from '../order/order.module'
import { PaymentController } from './payment.controller'

@Module({
  imports: [OrderModule],
  controllers: [PaymentController]
})
export class PaymentModule {}
