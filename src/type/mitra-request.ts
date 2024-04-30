import { Mitra } from "@prisma/client";
import { Request } from "express";


export interface MitraRequest extends Request {
    mitra?: Mitra
}