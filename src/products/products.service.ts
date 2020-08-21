import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products } from './products.model';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Products') private productModel: Model<Products>,) {
    }

    async addNewProduct(product:Products, userId:string){
       product.userId = userId;
       let newProduct =  new  this.productModel(product);
       return await newProduct.save();
    }
}
