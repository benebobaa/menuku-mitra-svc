import { prismaClient } from "../application/database";
import { CreateProductRequest, ProductResponse, toProductResponse } from "../model/product-model";
import { ProductValidation } from "../validation/product-validation";
import { Validation } from "../validation/validation";

export class ProductService {


    static async createProduct(request: CreateProductRequest): Promise<ProductResponse> {
        const productRequest = Validation.validate(ProductValidation.CREATE_PRODUCT, request);
        
        const product = await prismaClient.product.create({
            data: productRequest,
        });
        

        return toProductResponse(product);
    }
}