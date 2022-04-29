import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class UpdateUserAvatarDto {
  @ApiPropertyOptional({ description: '用户头像url' })
  @IsString()
  avatar_url: string
}
