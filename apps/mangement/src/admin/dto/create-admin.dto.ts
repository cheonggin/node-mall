import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreateAdminDto {
  @ApiProperty({ description: '用户名', example: 'cherry' })
  @IsString()
  name: string

  @ApiProperty({ description: '登录密码', example: '123456' })
  @IsString()
  password: string

  @ApiProperty({ description: '担任角色的id' })
  @IsNumber()
  role_id: number
}
