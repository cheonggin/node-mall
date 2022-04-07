import { ApiProperty } from '@nestjs/swagger'

export class PaginationQueryDto {
  @ApiProperty({ description: '分页，每页显示多少条数据', example: 10 })
  readonly limit: number

  @ApiProperty({ description: '当前是第几页', example: 1 })
  readonly offset: number

  @ApiProperty({ description: '查询参数', example: ' ', required: false })
  readonly query?: string
}
