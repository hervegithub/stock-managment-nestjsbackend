import { Controller, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.model';

@Controller('products')
export class ProductsController {

    constructor(private productService: ProductsService){

    }

    @Post(':userId')
    postProduct(@Body() product:Products, @Param() userId: string ){
        return this.productService.addNewProduct(product, userId);
    }
}
