import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'

export const CurrentUser = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest<Request>()

    return req.user
  }
)
