import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString, Min } from 'class-validator'
import { Type } from 'class-transformer'

export class PaginationQueryDto {
  @ApiProperty({ description: 'limit表示每页显示多少条数据', example: 10 })
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  readonly limit: number

  @ApiProperty({ description: 'offset表示当前是第几页', example: 0 })
  @IsNumber()
  @Type(() => Number)
  readonly offset: number

  @ApiProperty({ description: '查询参数', example: ' ', required: false })
  @IsOptional()
  @IsString()
  readonly query?: string
}
