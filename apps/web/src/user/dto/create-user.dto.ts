import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'test' })
  @IsString()
  name: string

  @ApiProperty({ description: '登录密码', example: 'test' })
  @IsString()
  password: string
}
