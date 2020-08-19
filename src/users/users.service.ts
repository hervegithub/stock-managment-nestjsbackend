import { Injectable } from '@nestjs/common';
import { Users } from './modals/users.interface';

@Injectable()
export class UsersService {

    companies : Users [];

    constructor(){
        this.companies = [];
    }

    testUsersAPi(): string {
        return 'Users Api is working!';
    }

    addNewCompany(data:Users){
        let longue = this.companies.push(data) -1;
        return {message: 'Company add successfully', token : longue };
    }
}
