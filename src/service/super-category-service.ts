import {SuperCategoryRequest, SuperCategoryResponse, toSuperCategory} from "../model/super-category-model";
import {Validation} from "../validation/validation";
import {SuperCategoryValidation} from "../validation/super-category-validation";
import {prismaClient} from "../application/database";

export class SuperCategoryService {
    static async create(request: SuperCategoryRequest): Promise<SuperCategoryResponse> {
        const superCategoryRequest = Validation.validate(SuperCategoryValidation.CREATE_SUPER_CATEGORY, request)

        const superCategoy = await prismaClient.superCategory.create({
            data: superCategoryRequest
        })

        return toSuperCategory(superCategoy)
    }


    static async list() {
        const superCategories = await prismaClient.superCategory.findMany({})

        return superCategories.map(superCategory => toSuperCategory(superCategory))
    }
    

}