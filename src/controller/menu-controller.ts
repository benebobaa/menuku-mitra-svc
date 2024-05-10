import {MitraRequest} from "../type/mitra-request";
import {NextFunction, Response} from "express";
import {CreateMenuRequest, UpdateMenuRequest} from "../model/menu-model";
import {MenuService} from "../service/menu-service";


export class MenuController {
    static async create(req : MitraRequest,res: Response, next: NextFunction){
        try {
            const request : CreateMenuRequest = req.body as CreateMenuRequest;
            request.image_url =  req.file?.path
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

    static async update(req : MitraRequest , res : Response, next : NextFunction){
        try {
            const request: UpdateMenuRequest = req.body as UpdateMenuRequest;
            request.image_url =  req.file?.path
            request.id = Number(req.params.menuId)

            const response = await MenuService.update(req.mitra?.id!, request);
            res.status(200).json({
                data: response,
            });
        } catch (e) {
            next(e);
        }
    }
}