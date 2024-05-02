import { ZodType, z } from "zod";



export class AddressValidation {
    
    static readonly CREATE: ZodType = z.object({
        mitra_id: z.number(),
        outlet_name: z.string().min(6).max(255),
        street: z.string().min(6).max(255),
        city: z.string().min(1).max(155),
        province: z.string().min(1).max(100),
        postal_code: z.string().max(10),
    });
}