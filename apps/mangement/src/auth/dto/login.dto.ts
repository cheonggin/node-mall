import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class LoginDto {
  @ApiProperty({ description: '用户名', example: 'cherry' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ description: '登录密码', example: '' })
  @IsNotEmpty()
  @IsString()
  password: string
}
