import { Module } from '@nestjs/common'
import { FileController } from './file.controller'
import { UserModule } from '../user/user.module'

@Module({
  imports: [UserModule],
  controllers: [FileController]
})
export class FileModule {}
