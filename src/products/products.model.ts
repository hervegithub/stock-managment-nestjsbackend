import * as mongoose from "mongoose";

export const productSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        productDesignation: { type: String, required: true },
        productCategory: { type: String, required: true },
        productQuantity: { type: Number, required: true },
        productHtPrice: { type: Number, required: true },
        productTttaPrice: { type: Number, required: true },
        productUnity: { type: String, required: false },
        productPlace: { type: String, required: false },
        productMinInStock: { type: Number, required: true }
    }
);

export interface Products extends mongoose.Document {
    userId : string;
    productDesignation:string;
    productCategory: string;
    productQuantity: number;
    productHtPrice: number;
    productTttaPrice: number;
    productUnity: String;
    productPlace: string;
    productMinInStock: number;
}