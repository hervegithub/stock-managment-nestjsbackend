import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.model';

@Controller('users')
export class UsersController {

    constructor(private readonly userService:UsersService){}

    @Get()
    getAllCompany(){
       return  this.userService.getAllCompany();
    }

    @Get(':id')
    getCompanyById(@Param('id') id : string){
       return  this.userService.getCompanyById(id);
    }
    
    @Post()
    postCompany(@Body() company: Users){
         return this.userService.addNewCompany(company);
    }

    @Delete()
    removeCompany(@Param('id') id : string){
        return this.userService.removeCompanyById(id);
    }

    @Patch(':id')
    updateCompany(@Body() company: Users, @Param('id') id : string){
        this.userService.updateCompany(company, id);
        return null;
    }
}
