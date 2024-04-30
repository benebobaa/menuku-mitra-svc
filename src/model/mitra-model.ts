import { Mitra } from "@prisma/client";

export type MitraEntity = {
  username: string;
  name: string;
  email: string;
  password: string;
  image_url: string;
}

export type MitraResponse = {
  id: number;
  username: string;
  name: string;
  email: string;
  image_url: string;
};

export type CreateMitraRequest = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginMitraRequest = {
  username: string;
  password: string;
};

export type LoginMitraResponse = {
  name: string;
  username: string;
  email: string;
  token: string;
}

export function toMitraEntity(request: CreateMitraRequest): MitraEntity {
  return {
    username: request.username,
    name: request.name,
    email: request.email,
    password: request.password,
    image_url: "temporary hardcode image url",
  };
}

export function toMitraResponse(mitra: Mitra): MitraResponse {
  return {
    id: mitra.id,
    username: mitra.username,
    name: mitra.name,
    email: mitra.email,
    image_url: mitra.image_url,
  };
}

export function toLoginMitraResponse(mitra: Mitra, token: string): LoginMitraResponse {
  return {
    name: mitra.name,
    username: mitra.username,
    email: mitra.email,
    token: token,
  }
}