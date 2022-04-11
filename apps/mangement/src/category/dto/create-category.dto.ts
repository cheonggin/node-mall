import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateCategoryDto {
  @ApiProperty({
    description: '父级分类id，可选，默认值为null',
    example: null,
    required: false
  })
  @IsOptional()
  @IsInt()
  readonly pid?: number

  @ApiProperty({
    description: '分类名称',
    example: '手机'
  })
  @IsString()
  readonly name: string

  @ApiProperty({
    description: '路径，可选，默认值为null',
    example: ''
  })
  @IsOptional()
  @IsString()
  readonly path?: string

  @ApiProperty({
    description: '图片url，可选，默认值为null',
    example: ''
  })
  @IsOptional()
  @IsString()
  readonly img_url?: string
}
