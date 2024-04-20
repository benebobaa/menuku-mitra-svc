import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import { CreateMitraRequest, MitraResponse, toMitraResponse } from "../model/mitra-model";
import { MitraValidation } from "../validation/mitra-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";

export class MitraService {


  static async register(request: CreateMitraRequest): Promise<MitraResponse> {
    const mitraRequest = Validation.validate(MitraValidation.CREATE_MITRA, request);

    const mitraWithSameUsername = await prismaClient.mitra.count(
      {
        where: {
          username: mitraRequest.username,
        }
      });
      
      if (mitraWithSameUsername != 0) {
        throw new ResponseError(400, "Username already exists");  
      }

      
      mitraRequest.password = await bcrypt.hash(mitraRequest.password, 10);

      const mitra = await prismaClient.mitra.create({
        data: mitraRequest,
      });

      return toMitraResponse(mitra)
  } 
}
