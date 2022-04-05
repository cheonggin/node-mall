import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { DatabaseService } from './database.service'

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory() {
        return {
          dialect: 'mysql',
          host: process.env.DATABASE_HOST,
          port: +process.env.DATABASE_PORT,
          username: process.env.DATABASE_USERNAME,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          autoLoadModels: true,
          synchronize: true
        }
      }
    })
  ],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
