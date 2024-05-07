import {ZodType, z} from "zod";

export class MitraValidation {

    static readonly REGISTER: ZodType = z.object({
        name: z.string().min(6).max(255),
        username: z.string().min(6).max(100),
        email: z.string().email(),
        image_url: z.string().min(6).max(255).optional(),
        password: z.string().min(8).max(50),
        confirmPassword: z.string().min(8).max(50),
    })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords don't match",
            path: ["confirmPassword"],
        });

    static readonly LOGIN: ZodType = z.object({
        username: z.string().min(6).max(100),
        password: z.string().min(8).max(50),
    });

    static readonly UPDATE: ZodType = z.object({
        name: z.string().min(6).max(255).optional(),
        username: z.string().min(6).max(100).optional(),
        image_url: z.string().min(6).max(255).optional(),
    });
}
