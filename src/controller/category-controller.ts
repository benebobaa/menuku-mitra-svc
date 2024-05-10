import {NextFunction, Request, Response} from "express";
import {SuperCategoryService} from "../service/super-category-service";
import {CategoryRequest} from "../model/category-model";
import {CategoryService} from "../service/category-service";

export class CategoryController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const requestCategory: CategoryRequest = req.body as CategoryRequest
            const response = await CategoryService.create(requestCategory)
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e)
        }
    }


    static async list(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await CategoryService.list()
            res.status(200).json({
                data: response
            })
        } catch (e) {
            next(e)
        }
    }
}