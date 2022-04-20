import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsOptional } from 'class-validator'

export class CreateCartDto {
  @ApiProperty({ description: '商品个数', example: 0 })
  @IsNumber()
  count: number

  @ApiProperty({ description: '商品id' })
  @IsNumber()
  readonly product_id: number

  @ApiPropertyOptional({ description: '当前商品是否选中，默认为true' })
  @IsOptional()
  @IsBoolean()
  checked?: boolean
}
