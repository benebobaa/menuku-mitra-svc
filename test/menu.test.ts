import supertest from "supertest";
import {web} from "../src/application/web";

describe('POST /api/menu', () => {

    // beforeEach(async  () => {
    //     await
    // })

    it('should create new menu', async  () => {
        const response = await supertest(web)
            .post("/api/menu")
            // .set("Authorization", `Bearer ${token}`)
            .send({
                first_name: "nizar",
                last_name: "fazari",
                email: "nizat@gmail.com",
                phone: "0812321",
            })
    });
});