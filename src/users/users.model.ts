import * as mongoose from "mongoose"

export const companySchema = new mongoose.Schema(
    {
        companyName: {type: String, required:true},
        companySocialRaison: {type: String, required:true},
        companyTypeOfProduct: {type: String, required:true},
        companyContry: {type: String, required:true},
        companyCity: {type: String, required:true},
        companyPhoneNumber: {type: String, required:true},
        companyEmail: {type: String, required:true},
        companyRegisterNumber: {type: String, required:true},
        isDescrib:{type: Boolean, required:true},
    }
)


export interface Users extends mongoose.Document {
    companyName: string;
    companySocialRaison: string;
    companyTypeOfProduct: string;
    companyContry: string;
    companyCity: string;
    companyPhoneNumber: string;
    companyEmail: string;
    companyRegisterNumber: string;
    isDescrib: boolean;
}
