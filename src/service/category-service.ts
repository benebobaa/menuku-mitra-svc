
import {Validation} from "../validation/validation";
import {prismaClient} from "../application/database";
import {CateogryValidation} from "../validation/cateogry-validation";
import {CategoryRequest, CategoryResponse, toCategory} from "../model/category-model";

export class CategoryService {
    static async create(request: CategoryRequest): Promise<CategoryResponse> {
        const categoryRequest = Validation.validate(CateogryValidation.CREATE_CATEGORY, request)

        const category = await prismaClient.category.create({
            data: categoryRequest
        })

        return toCategory(category)
    }


    static async list(): Promise<Array<CategoryResponse>>{
        const categories = await prismaClient.category.findMany({})

        return categories.map(category => toCategory(category))
    }
}