import {z, ZodType} from "zod";

export class CateogryValidation {
    static readonly CREATE_CATEGORY: ZodType = z.object({
        name: z.string().min(6).max(255),
        spcategory_id: z.number().positive()
    })
}