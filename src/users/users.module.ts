import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { companySchema } from './users.model';

@Module({
  imports: [MongooseModule.forFeature([{name: "Company", schema: companySchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
