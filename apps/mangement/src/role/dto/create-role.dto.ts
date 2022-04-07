import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateRoleDto {
  @ApiProperty({ description: '角色名称，唯一', example: '前端' })
  @IsString()
  name: string

  @ApiProperty({ description: '角色描述，可选参数', example: '前端开发' })
  @IsOptional()
  @IsString()
  desc?: string

  @ApiProperty({ description: '选中的节点，可选参数', example: [] })
  @IsInt({ each: true })
  checkedKeys: number[]

  @ApiProperty({ description: '半选中的节点，可选参数', example: [] })
  @IsInt({ each: true })
  halfCheckedKeys: number[]
}
