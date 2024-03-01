import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
    }),
    MongooseModule.forRoot(process.env.MONGODB_ENDPOINT, {
      dbName: process.env.DB_NAME,
    }),
  ],
})
export class AppModule {}
