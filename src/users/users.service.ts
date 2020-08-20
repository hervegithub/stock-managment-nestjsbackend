import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.model';


@Injectable()
export class UsersService {

    companies: Users[];

    constructor(@InjectModel('Company') private companyModel: Model<Users>,) {
        this.companies = [];
    }

    async  getAllCompany(){
        let companies = await this.companyModel.find()
        return companies;
    }

    async getCompanyById(companyId:string){
       let company = await this.companyModel.findById(companyId);
        return company;
    }

    async removeCompanyById(companyId:string){
        let companies =  await this.companyModel.findByIdAndRemove(companyId);
        return companies;
    }

    async addNewCompany(data: Users) {
        const newCompany = new this.companyModel(
            {
                companyName: data.companyName,
                companySocialRaison: data.companySocialRaison,
                companyTypeOfProduct: data.companyTypeOfProduct,
                companyContry: data.companyContry,
                companyCity: data.companyCity,
                companyPhoneNumber: data.companyPhoneNumber,
                companyEmail: data.companyEmail,
                companyRegisterNumber: data.companyRegisterNumber,
                isDescrib: false,
            }
        );

        const user = await newCompany.save();

        return user;
    }

    async updateCompany(company:Users, companyId:string){
       let companyUpdate = await this.getCompanyById(companyId)

       if(company.companyName){
           companyUpdate.companyName = company.companyName;
       }

       if(company.companySocialRaison){
        companyUpdate.companySocialRaison = company.companySocialRaison;
       }

       if(company.companyTypeOfProduct){
        companyUpdate.companyTypeOfProduct = company.companyTypeOfProduct;
       }

       if(company.companyContry){
        companyUpdate.companyContry = company.companyContry;
       }

       if(company.companyCity){
        companyUpdate.companyCity = company.companyCity;
       }

       if(company.companyPhoneNumber){
        companyUpdate.companyPhoneNumber = company.companyPhoneNumber;
       }

       if(company.companyEmail){
        companyUpdate.companyEmail = company.companyEmail;
       }

       if(company.companyRegisterNumber){
        companyUpdate.companyRegisterNumber = company.companyRegisterNumber;
       }

       if(company.isDescrib){
        companyUpdate.isDescrib = company.isDescrib;
       }

       companyUpdate.save();

    }
}
