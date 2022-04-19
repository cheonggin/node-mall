import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsOptional, IsString } from 'class-validator'

export class CreateAddressDto {
  @IsString()
  @ApiProperty({ description: '收货人姓名', example: '张三' })
  name: string

  @IsString()
  @ApiProperty({ description: '收货人联系电话', example: '13111110000' })
  tel: string

  @IsString()
  @ApiProperty({ description: '省份', example: '江苏省' })
  province: string

  @IsString()
  @ApiProperty({ description: '城市', example: '无锡市' })
  city: string

  @IsString()
  @ApiProperty({ description: '区县', example: '锡山区' })
  county: string

  @IsString()
  @ApiProperty({ description: '详细地址', example: '特1号' })
  addressDetail: string

  @IsString()
  @ApiProperty({ description: 'areaCode', example: '' })
  areaCode: string

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ description: '是否为默认地址，true或false', example: false })
  isDefault?: boolean
}
