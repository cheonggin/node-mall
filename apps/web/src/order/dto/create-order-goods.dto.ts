import { IsNumber } from 'class-validator'

export class CreateOrderGoodsDto {
  @IsNumber()
  order_id: number

  @IsNumber()
  count: number

  @IsNumber()
  product_id: number
}
