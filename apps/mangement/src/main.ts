import { NestFactory } from '@nestjs/core'
import { MangementModule } from './mangement.module'

async function bootstrap() {
  const app = await NestFactory.create(MangementModule)
  const PORT = process.env.MANGEMENT_APP_PORT || 3000
  await app.listen(PORT)
}
bootstrap()
