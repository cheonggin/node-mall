import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateGoodDto {
  @ApiProperty({ description: '产品名称' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ description: '产品介绍' })
  @IsOptional()
  @IsString()
  desc?: string

  @ApiProperty({ description: '产品图片url' })
  @IsString()
  image: string

  @ApiProperty({ description: '产品价格' })
  @IsString()
  price: string

  @ApiProperty({ description: '产品满意度' })
  @IsOptional()
  @IsString()
  satisfy_per?: string

  @ApiProperty({ description: '产品评价总数' })
  @IsOptional()
  @IsString()
  comments_total?: string

  @IsOptional()
  @IsArray()
  activity_label?: any[]

  @IsOptional()
  @IsArray()
  class_parameters?: any[]
}
