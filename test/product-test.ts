import supertest from "supertest";
import { web } from '../src/application/web';
import { logger } from "../src/application/logging";


describe('POST /api/products', async () => { 

    it('should reject requests when name is empty and price is under 1', async () => {
        const response = await supertest(web)
        .post("/api/products")
        .send({
            name:"",
            price:0,
        });

    logger.debug(response.body)
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
    });


    it('should create new product', async () => {
        
        const response = await supertest(web)
        .post("/api/products")
        .send({
            name:"Product 1",
            price:100,
        });

        logger.debug(response.body)
        expect(response.status).toBe(200);
        expect(response.body.id).toBeDefined();
        expect(response.body.name).toBe("Product 1");
        expect(response.body.price).toBe(100);
    });
});