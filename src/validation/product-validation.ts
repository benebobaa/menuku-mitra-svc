import { ZodType, z } from "zod";

export class ProductValidation {

    static readonly CREATE_PRODUCT: ZodType = z.object({
        name: z.string().min(1).max(100),
        price: z.number().min(1),
    });
}