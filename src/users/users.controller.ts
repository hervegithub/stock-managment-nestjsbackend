import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './modals/users.interface';

@Controller('users')
export class UsersController {

    constructor(private readonly userService:UsersService){}

    @Get()
    getTest() : string {
        return this.userService.testUsersAPi();
    }
    
    @Post()
    postCompany(@Body() company: Users){
         return this.userService.addNewCompany(company);
    }
}
