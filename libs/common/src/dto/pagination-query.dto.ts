import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsOptional, IsString, Min } from 'class-validator'

export class PaginationQueryDto {
  @ApiProperty({ description: 'limit表示每页显示多少条数据', example: 10 })
  @IsInt()
  @Min(1)
  readonly limit: number

  @ApiProperty({ description: 'offset表示当前是第几页', example: 1 })
  @IsInt()
  readonly offset: number

  @ApiProperty({ description: '查询参数', example: ' ', required: false })
  @IsOptional()
  @IsString()
  readonly query?: string
}
