import { IsArray, IsNumber, IsString } from 'class-validator'

export class BodyDto {
  @IsNumber()
  address_id: number

  @IsArray()
  list: any[]
}

export class CreateOrderDto {
  @IsString()
  order_number: string

  @IsNumber()
  user_id: number

  @IsNumber()
  address_id: number
}
