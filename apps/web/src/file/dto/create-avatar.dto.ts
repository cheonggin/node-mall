import { IsNumber, IsString } from 'class-validator'

export class CreateAvatarDto {
  @IsString()
  filename: string

  @IsNumber()
  size: number

  @IsString()
  mimetype: string

  @IsNumber()
  user_id: number
}
