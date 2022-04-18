import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  UseGuards
} from '@nestjs/common'
import { FileService } from './file.service'
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger'
import { FileInterceptor } from '@nestjs/platform-express'
import { FileUploadDto } from './dto/file-upload.dto'
import { JwtAuthGuard } from '@libs/common/guards/jwt-auth.guard'
import { CurrentUser } from '@libs/common/decorators/current-user.decorator'
import { User } from '../user/entities/user.entity'
import { UserService } from '../user/user.service'

@Controller('file')
@ApiTags('上传文件')
export class FileController {
  constructor(
    private readonly fileService: FileService,
    private readonly userService: UserService
  ) {}

  @Post('avatar')
  @ApiOperation({ summary: '上传用户头像' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: '请上传图片',
    type: FileUploadDto
  })
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(JwtAuthGuard)
  async uploadAvatar(
    @Body() fileUploadDto: FileUploadDto,
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: User
  ) {
    const { size, mimetype, filename } = file
    const dto = {
      filename,
      size,
      mimetype,
      user_id: user.id
    }

    // 将用户图片保存到数据库中
    // 查找之前是否有保存该用户的头像，无则新建，有则更新
    const result = await this.fileService.findOne(user.id)
    if (result) {
      await this.fileService.updateAvatar(dto)
    } else {
      await this.fileService.createAvatar(dto)
    }

    // 更新用户的avatar_url
    const url = `${process.env.APP_HOST}:${process.env.WEB_APP_PORT}/upload/${filename}`
    await this.userService.updateAvatarByUserId(user.id, url)

    return { ...file, url }
  }
}
