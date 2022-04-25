import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class AuthPaymentDto {
  @ApiProperty({ description: '返回商家链接query中的out_trade_no值' })
  @IsString()
  out_trade_no: string

  @ApiProperty({ description: '返回商家链接query中的trade_no值' })
  @IsString()
  trade_no: string
}
