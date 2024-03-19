import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
        imports: [ConfigService],
        useFactory: (configService: ConfigService) => ({
            uri: configService.get('MONGO_URI')
        }),
        inject: [ConfigService]
    }),
  ],
})
export class DatabaseModule {}
