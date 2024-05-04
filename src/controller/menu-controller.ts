import {MitraRequest} from "../type/mitra-request";
import {NextFunction, Response} from "express";
import {CreateMitraRequest} from "../model/mitra-model";
import {MitraService} from "../service/mitra-service";
import {CreateMenuRequest} from "../model/menu-model";
import {MenuService} from "../service/menu-service";
import {logger} from "../application/logging";

export class MenuController {
    static async create(req : MitraRequest,res: Response, next: NextFunction){
        try {
            const request: CreateMenuRequest = req.body as CreateMenuRequest;
            const response = await MenuService.create(req.mitra?.id!, request);
            res.status(200).json({
                data: response,
            });
        } catch (e) {
            next(e);
        }
    }

    static async list(req : MitraRequest,res: Response, next: NextFunction){
        try {
            const response = await MenuService.list(req.mitra?.id!);
            res.status(200).json({
                data: response,
            });
        } catch (e) {
            next(e);
        }
    }
}