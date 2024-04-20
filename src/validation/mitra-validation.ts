import { ZodType, z } from "zod";

export class MitraValidation {

    static readonly CREATE_MITRA: ZodType = z.object({
      username: z.string().min(6).max(100),
      password: z.string().min(8).max(50),
    });
}
