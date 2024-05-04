import {ZodType, z} from "zod";

export class MenuValidation {
    static readonly CREATE_MENU: ZodType = z.object({
        name: z.string().min(6).max(255),
        description: z.string().min(6).max(255),
        price: z.string().min(1).max(100),
        image_url: z.string().min(1).max(100),
    })
}