import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './services/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://JJ:JJ050116@localhost:27020/test?authSource=admin'),
    UsersModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService, 
    UsersService,
  ],
})
export class AppModule {}
