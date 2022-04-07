import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator'

export class CreateMenuDto {
  @ApiProperty({
    description: '父级路由菜单id，可选，默认值为null',
    example: null,
    required: false
  })
  @IsOptional()
  @IsInt()
  readonly pid?: number

  @ApiProperty({
    description: '路由菜单名称，必填',
    example: '产品管理'
  })
  @IsString()
  readonly name: string

  @ApiProperty({
    description: '路由菜单类型，1表示菜单，2表示按钮',
    enum: ['1', '2'],
    example: '1',
    required: false
  })
  @IsOptional()
  @IsEnum(['1', '2'])
  readonly type?: string

  @ApiProperty({
    description: '路由菜单路径，可选',
    example: '',
    required: false
  })
  @IsOptional()
  @IsString()
  readonly path?: string

  @ApiProperty({
    description: '路由菜单图标，可选',
    example: '',
    required: false
  })
  @IsOptional()
  @IsString()
  readonly icon?: string

  @ApiProperty({
    description: '路由菜单组件名称，可选',
    example: '',
    required: false
  })
  @IsOptional()
  @IsString()
  readonly component?: string

  @ApiProperty({
    description: '路由菜单权限标识，可选',
    example: 'create-product',
    required: false
  })
  @IsOptional()
  @IsString()
  readonly menu_code?: string
}
