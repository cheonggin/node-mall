import { Injectable } from '@nestjs/common'

@Injectable()
export class MangementService {
  getHello(): string {
    return 'Hello World!'
  }
}
