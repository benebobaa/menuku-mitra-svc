import express from 'express';
import { ProductController } from '../controller/product-controller';


export const publicRouter =  express.Router();
publicRouter.post("/api/products", ProductController.createProduct);