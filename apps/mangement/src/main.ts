import { HttpExceptionFilter } from '@libs/common/filter/http-exception.filter'
import { WrapResponse } from '@libs/common/interceptors/wrap-response.interceptor.interceptor'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { MangementModule } from './mangement.module'

async function bootstrap() {
  const app = await NestFactory.create(MangementModule)
  const PORT = process.env.MANGEMENT_APP_PORT || 3000
  const options = new DocumentBuilder()
    .setTitle('商城后台管理系统API')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('api-docs', app, document)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalInterceptors(new WrapResponse())
  await app.listen(PORT)
  console.log(`api接口文档请访问，http://localhost:${PORT}/api-docs`)
}
bootstrap()
