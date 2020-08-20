import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {MongooseModule} from "@nestjs/mongoose"



@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://codehero:TU1vxpN3yzEObuwk@cluster0-qjkfe.mongodb.net/gestion-stock?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
