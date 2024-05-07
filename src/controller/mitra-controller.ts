import { NextFunction, Request, Response } from "express";
import { CreateMitraRequest, LoginMitraRequest, UpdateMitraRequest } from "../model/mitra-model";
import { MitraService } from "../service/mitra-service";
import { MitraRequest } from "../type/mitra-request";
import { upload } from "../application/multer";



export class MitraController {

    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request:CreateMitraRequest = req.body as CreateMitraRequest;
            request.image_url =  req.file?.path
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

    static async update(req: MitraRequest, res: Response, next: NextFunction) {

        try {
            const request: UpdateMitraRequest = req.body as UpdateMitraRequest;
            request.image_url =  req.file?.path
            const response = await MitraService.update(req.mitra?.id!, request);
            res.status(200).json({
                data: response,
            });
        } catch (e) {
            next(e);
        }
    }

    static async uploadImage(req: MitraRequest, res: Response, next: NextFunction) {
        try {
            const baseUrl = req.protocol + "://" + req.get("host");
            upload.single("file")(req, res, async (err: any) => {
                if (err) {
                    next(err);
                } else if (!req.file) {
                    next(new Error("Image is required"));
                } else {
                    const response = await MitraService.uploadImage(req.file!, baseUrl);
                    res.status(200).json({
                        data: response,
                    });
                }
            });
        } catch (e) {
            next(e);
        }
    }
}