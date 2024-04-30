import {Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../application/env";
import { MitraRequest } from "../type/mitra-request";
import { Mitra } from "@prisma/client";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const validationReq = req as MitraRequest;
    const authorization = validationReq.headers.authorization;

    if (authorization) {
        const token = authorization.split(" ")[1];
        console.log("token", token);
        try {
            const jwtDecode = jwt.verify(token, env.JWT_SECRET);
            // if(typeof jwtDecode !== "string") {
            //     validationReq.mitra = jwtDecode as Mitra;
            // }
            validationReq.mitra = jwtDecode as Mitra;
            next();
            return;
        } catch (e) {
            return res.status(401).json({
                errors: "Unauthorized"
            }).end();
        }
    }
    
    res.status(401).json({
        errors: "Unauthorized"
    }).end();
}
