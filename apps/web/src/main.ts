import { HttpExceptionFilter } from '@libs/common/filter/http-exception.filter'
import { WrapResponse } from '@libs/common/interceptors/wrap-response.interceptor.interceptor'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { WebModule } from './web.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(WebModule)
  const PORT = process.env.WEB_APP_PORT || 3000
  const options = new DocumentBuilder()
    .setTitle('商城前端API')
    .setVersion('1.0')
    .addBearerAuth()
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
