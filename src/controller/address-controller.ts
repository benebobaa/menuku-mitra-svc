import { Request,Response ,NextFunction } from "express";
import { AddressRequest } from "../model/address-model";
import { AddressService } from "../service/address-service";
import { MitraRequest } from "../type/mitra-request";




export class AddressController {
    
    static async create(req: MitraRequest, res: Response, next: NextFunction) {

        try {
            const request: AddressRequest = req.body as AddressRequest;
            request.mitra_id = req.mitra?.id!;
            const response = await AddressService.create(request);
            res.status(201).json({
                data: response,
            });
        } catch (e) {
            next(e);
        }
    }

    static async get(req: MitraRequest, res: Response, next: NextFunction) {
        
        try {
            const response = await AddressService.get(req.mitra?.id!);
            res.status(200).json({
                data: response,
            });
        } catch (e) {
            next(e);
        }
    }

    
}