import { ZodType, z } from "zod";

export class MitraValidation {

    static readonly CREATE_MITRA: ZodType = z.object({
      name: z.string().min(6).max(255),
      username: z.string().min(6).max(100),
      email: z.string().email(),
      password: z.string().min(8).max(50),
      confirmPassword: z.string().min(8).max(50),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"], 
    }); 

    static readonly LOGIN_MITRA: ZodType = z.object({
      username: z.string().min(6).max(100),
      password: z.string().min(8).max(50),
    });
}
