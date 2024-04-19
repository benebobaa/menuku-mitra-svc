import { NextFunction, Request, Response } from "express";
import { CreateProductRequest } from "../model/product-model";
import { ProductService } from "../service/product-service";

export class ProductController {


    static async createProduct(req: Request, res:Response, next:NextFunction){

        try {
            const request:CreateProductRequest = req.body as CreateProductRequest;
            const response = await ProductService.createProduct(request);
            res.status(201).json({
                data: response,
            });
        } catch (e) {
            next(e);
        }
        
    }
}