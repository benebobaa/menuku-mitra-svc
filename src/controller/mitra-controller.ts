import { NextFunction, Request, Response } from "express";
import { CreateMitraRequest } from "../model/mitra-model";
import { MitraService } from "../service/mitra-service";



export class MitraController {

    static async register(req: Request, res: Response, next: NextFunction) {

        try {
            const request:CreateMitraRequest = req.body as CreateMitraRequest;
            const response = await MitraService.register(request);
            res.status(201).json({
                data: response,
            });
        } catch (e) {
            next(e);
        }

    }
}