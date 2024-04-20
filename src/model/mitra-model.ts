import { Mitra } from "@prisma/client";

export type MitraResponse = {
  id: number;
  username: string;
};

export type CreateMitraRequest = {
  username: string;
  password: string;
};

export function toMitraResponse(mitra: Mitra): MitraResponse {
  return {
    id: mitra.id,
    username: mitra.username,
  };
}
