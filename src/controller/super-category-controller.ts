import {SuperCategoryRequest} from "../model/super-category-model";
import {NextFunction, Response, Request} from "express";
import {SuperCategoryService} from "../service/super-category-service";

export class SuperCategoryController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const requestSuperCategory: SuperCategoryRequest = req.body as SuperCategoryRequest
            const response = await SuperCategoryService.create(requestSuperCategory)
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e)
        }
    }


    static async list(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await SuperCategoryService.list()
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e)
        }
    }
}