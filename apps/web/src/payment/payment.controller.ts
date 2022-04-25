import { Controller, Post, Body, UseGuards } from '@nestjs/common'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { AuthPaymentDto } from './dto/auth-payment.dto'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import AliPayForm from 'alipay-sdk/lib/form'
import axios from 'axios'
import alipaySdk from './config-sdk/alipay'
import { OrderService } from '../order/order.service'
import { JwtAuthGuard } from '@libs/common/guards/jwt-auth.guard'

@Controller()
@ApiTags('支付')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class PaymentController {
  constructor(private readonly orderService: OrderService) {}

  @Post('payment')
  @ApiOperation({ summary: '发起支付' })
  async create(@Body() createPaymentDto: CreatePaymentDto) {
    // 对接支付宝api
    const formData = new AliPayForm()
    // 调用 setMethod 并传入 get，会返回可以跳转到支付页面的 url
    formData.setMethod('get')

    // 支付成功或者失败跳转的链接
    formData.addField('returnUrl', 'http://localhost:8080/#/payment')
    formData.addField('bizContent', {
      outTradeNo: createPaymentDto.order_number,
      productCode: 'FAST_INSTANT_TRADE_PAY',
      totalAmount: createPaymentDto.price,
      subject: createPaymentDto.name
    })

    // 返回支付链接
    const paymentUrl = await alipaySdk.exec(
      'alipay.trade.page.pay',
      {},
      { formData: formData }
    )

    return { paymentUrl }
  }

  @Post('payment-success')
  @ApiOperation({ summary: '验证支付' })
  async authPayment(@Body() authPaymentDto: AuthPaymentDto) {
    const formData = new AliPayForm()
    formData.setMethod('get')
    // 支付时信息
    formData.addField('bizContent', authPaymentDto)

    const url = await alipaySdk.exec(
      'alipay.trade.query',
      {},
      { formData: formData }
    )
    // 向支付宝发送请求，验证支付情况
    const {
      data: { alipay_trade_query_response }
    } = await axios.get(url as string)

    if (alipay_trade_query_response.code === '10000') {
      switch (alipay_trade_query_response.trade_status) {
        case 'WAIT_BUYER_PAY':
          return { code: 1, msg: '支付宝有交易记录，没付款' }
        case 'TRADE_CLOSED':
          return { code: 2, msg: '交易关闭' }
        case 'TRADE_FINISHED':
          return { code: 3, msg: '交易结束，不可退款' }
        case 'TRADE_SUCCESS':
          // 修改订单支付状态为1
          this.orderService.updateOrderPayStatus(authPaymentDto.out_trade_no)
          return { code: 4, msg: '交易完成' }
      }
    } else if (alipay_trade_query_response.code === '40004') {
      return { code: 5, msg: '交易不存在' }
    }
  }
}
