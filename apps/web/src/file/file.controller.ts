import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  UseGuards
} from '@nestjs/common'
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
import * as COS from 'cos-nodejs-sdk-v5'
import { UserService } from '../user/user.service'

const cos = new COS({
  SecretId: process.env.SECRET_ID,
  SecretKey: process.env.SECRET_KEY,
  Domain: process.env.DOMAIN
})

@Controller('file')
@ApiTags('上传文件')
export class FileController {
  constructor(private readonly userService: UserService) {}

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
    @UploadedFile() file: Express.Multer.File
  ) {
    const extName = file.originalname.split('.').pop()
    const newFileName = Date.now() + '.' + extName

    const { Location } = await cos.putObject({
      Bucket: process.env.BUCKET,
      Region: process.env.REGION,
      Key: `mall-web/${newFileName}`, // cos存放路径
      Body: file.buffer
    })
    const url = `https://${Location}`

    return { url }
  }
}
