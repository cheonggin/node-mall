import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common'
import { Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp() // 获取请求上下文
    const response = ctx.getResponse<Response>() // 获取请求上下文中的response对象
    const status = exception.getStatus()
    const exceptionResponse = exception.getResponse()
    const error =
      typeof response === 'string'
        ? { message: exceptionResponse }
        : (exceptionResponse as object)

    response.status(status).json({ code: -1, msg: error })
  }
}
