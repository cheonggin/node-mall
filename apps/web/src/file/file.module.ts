import { Module } from '@nestjs/common'
import { FileService } from './file.service'
import { FileController } from './file.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Avatar } from './entities/avatar.entity'
import { MulterModule } from '@nestjs/platform-express'
import { UserModule } from '../user/user.module'
import { diskStorage } from 'multer'

@Module({
  imports: [
    SequelizeModule.forFeature([Avatar]),
    MulterModule.register({
      storage: diskStorage({
        destination: 'upload',
        filename: (req, file, cb) => {
          return cb(null, file.originalname)
        }
      })
    }),
    UserModule
  ],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService]
})
export class FileModule {}
