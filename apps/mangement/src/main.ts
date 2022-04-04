import { NestFactory } from '@nestjs/core'
import { MangementModule } from './mangement.module'

async function bootstrap() {
  const app = await NestFactory.create(MangementModule)
  await app.listen(3000)
}
bootstrap()
