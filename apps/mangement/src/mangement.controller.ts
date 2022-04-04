import { Controller, Get } from '@nestjs/common'
import { MangementService } from './mangement.service'

@Controller()
export class MangementController {
  constructor(private readonly mangementService: MangementService) {}

  @Get()
  getHello(): string {
    return this.mangementService.getHello()
  }
}
