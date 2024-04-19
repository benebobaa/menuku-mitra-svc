import { Product } from "@prisma/client";

export type ProductResponse = {
  id: number;
  name: string;
  price: number;
}


export type CreateProductRequest = {
  name: string,
  price: number,
}


export function toProductResponse(product: Product):  ProductResponse {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
  }
}


export type ProductResponses = ProductResponse[];


export function toProductResponses(products: Product[]): ProductResponses {
  return products.map(toProductResponse);
}