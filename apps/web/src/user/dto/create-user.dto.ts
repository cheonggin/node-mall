import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'test' })
  @IsString()
  name: string

  @ApiProperty({ description: '登录密码', example: 'test' })
  @IsString()
  password: string

  @ApiPropertyOptional({ description: '用户头像url' })
  @IsOptional()
  @IsString()
  avatar_url?: string
}
