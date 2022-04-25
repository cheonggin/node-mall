import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreatePaymentDto {
  @ApiProperty({ description: '订单id' })
  @IsString()
  order_number: string

  @ApiProperty({ description: '商品总价格' })
  @IsNumber()
  price: number

  @ApiProperty({ description: '商品名称，多个则以逗号隔开' })
  @IsString()
  name: string
}
