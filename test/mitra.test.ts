import supertest from "supertest";
import { web } from "../src/application/web";
import { logger } from "../src/application/logging";
import { response } from "express";
import {prismaClient} from "../src/application/database";

export class MitraTest {
    static async createMitraAndLogin (){
        const mitra = await prismaClient.mitra.create({
            data : {
                username: "test",
                name: "test",
                email: "test@gmail.com",
                password: "password12345",
                image_url: "temporary hardcode image url",
            }
        })

        
    }

}

describe("POST /api/register", () => {

    it("should reject requests when username is empty and password is under 1", async () => {

        const response = await supertest(web)
            .post("/api/register")
            .send({
                username: "",
                password: "a",
                confirmPassword: "a",
            });
        
            logger.debug(response.body);

            expect(response.status).toBe(400);
            expect(response.body.errors).toBeDefined();
        });

    it("should create new mitra if submit the data meets the requirment", async () => {
    
       const response = await supertest(web)
            .post("/api/register")
            .send({
                username: "koatcoffee",
                password: "password12345",
            });
            
            logger.debug(response.body);
            // expect(response.status).toBe(201);
            // expect(response.body.data).toBeDefined();
            
    });
});