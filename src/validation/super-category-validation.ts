import {z, ZodType} from "zod";

export class SuperCategoryValidation {

    static readonly CREATE_SUPER_CATEGORY: ZodType = z.object({
        name: z.string().min(6).max(255),
    })
}