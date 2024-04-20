import express from 'express';
import { ProductController } from '../controller/product-controller';
import { MitraController } from '../controller/mitra-controller';


export const publicRouter =  express.Router();
publicRouter.post("/api/products", ProductController.createProduct);

publicRouter.get("/api/products", ProductController.getProducts);

publicRouter.post("/api/register", MitraController.register);
