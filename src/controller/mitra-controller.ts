import { NextFunction, Request, Response } from "express";
import { CreateMitraRequest, LoginMitraRequest } from "../model/mitra-model";
import { MitraService } from "../service/mitra-service";
import { MitraRequest } from "../type/mitra-request";



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


    static async login(req: Request, res: Response, next: NextFunction) {
        
        try {
            const request: LoginMitraRequest = req.body as LoginMitraRequest;
            const response  = await MitraService.login(request);
            res.status(200).json({
                data: response,
            });
            
        } catch (e) {
            next(e);
        }
    }

    static async get(req: MitraRequest, res: Response, next: NextFunction) {

        try {
            const response = await MitraService.get(req.mitra?.username!)
            res.status(200).json({
                data: response,
            });
        } catch (e) {
            next(e);
        }
    }
}