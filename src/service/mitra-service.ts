import { Mitra } from "@prisma/client";
import { prismaClient } from "../application/database";
import { env } from "../application/env";
import { ResponseError } from "../error/response-error";
import { CreateMitraRequest, LoginMitraRequest, LoginMitraResponse, MitraImageResponse, MitraProfileResponse, MitraResponse, UpdateMitraRequest, toLoginMitraResponse, toMitraEntity, toMitraProfileResponse, toMitraResponse } from "../model/mitra-model";
import { MitraValidation } from "../validation/mitra-validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class MitraService {


  static async register(request: CreateMitraRequest): Promise<MitraResponse> {
    const mitraRequest = Validation.validate(MitraValidation.REGISTER, request);

    const totalMitraSameUserameorEmail = await prismaClient.mitra.count(
      {
        where: {
          OR: [
            { username: mitraRequest.username },
            { email: mitraRequest.email },
          ],
        },
      }
    )

    if (totalMitraSameUserameorEmail != 0){
      throw new ResponseError(400, "Username or email already exists");
    }

    mitraRequest.password = await bcrypt.hash(mitraRequest.password, 10);

    const mitraEntity = toMitraEntity(mitraRequest);

    const mitra = await prismaClient.mitra.create({
      data: mitraEntity,
    });    

    console.log("mitra", mitra);

    return toMitraResponse(mitra);
  } 


  static async login (request: LoginMitraRequest): Promise<LoginMitraResponse> {
    const loginRequest = Validation.validate(MitraValidation.LOGIN, request);

    const mitra = await prismaClient.mitra.findFirst({
      where: {
        username: loginRequest.username,
      }
    });

    if (!mitra) {
      throw new ResponseError(401, "Username or password is wrong");
    }

    const isPasswordMatch = await bcrypt.compare(loginRequest.password, mitra.password);

    if (!isPasswordMatch) {
      throw new ResponseError(401, "Username or password is wrong");
    }

    const payload = {
      id: mitra.id,
      username: mitra.username,
    }

    const token = jwt.sign(payload, env.JWT_SECRET, {expiresIn: env.EXPIRED_IN})

    return toLoginMitraResponse(mitra, token);
  }
  

  static async get(username: string): Promise<MitraProfileResponse> {
    const mitra = await prismaClient.mitra.findFirst({
      where: {
        username: username,
      }
    });

    if (!mitra) {
      throw new ResponseError(404, "Mitra not found");
    }

    const addresses = await prismaClient.address.findMany({
      where: {
        mitra_id: mitra.id,
      }
    });
  
   return toMitraProfileResponse(mitra, addresses); 
  }


  static async update(mitraId: number, request: UpdateMitraRequest): Promise<MitraResponse> {
    const updateRequest = Validation.validate(MitraValidation.UPDATE, request);

    const mitra = await prismaClient.mitra.findFirst({
      where: {
        id: mitraId,
      }
    });

    if (request.username) {
      const totalMitraSameUsername = await prismaClient.mitra.count({
        where: {
          username: updateRequest.username,
          id: {
            not: mitraId,
          },
        }
      });

      if (totalMitraSameUsername != 0) {
        throw new ResponseError(400, "Username already exists");
      }
    }

    if (!mitra) {
      throw new ResponseError(404, "Mitra not found");
    }
    
    if (request.name) {
      mitra.name = updateRequest.name;
    }

    if (request.name) {
      mitra.username = updateRequest.username;
    }

    if (request.image_url) {
      mitra.image_url = updateRequest.image_url!;
    }
    
    const updatedMitra = await prismaClient.mitra.update({
      where: {
        id: mitraId,
      },
      data: mitra,
    });

    return toMitraResponse(updatedMitra);
  }


  static async uploadImage(file: Express.Multer.File, baseUrl: string ): Promise<MitraImageResponse> {
    

    const image_url = baseUrl + "/images/" + file.filename;

    return {
      image_url: image_url,
    }
  }
}
