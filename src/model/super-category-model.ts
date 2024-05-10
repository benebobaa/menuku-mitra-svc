import {Menu, SuperCategory} from "@prisma/client";
import {MenuResponse} from "./menu-model";

export type SuperCategoryRequest = {
    name : string
}


export type SuperCategoryResponse = {
    id : number,
    name : string
}

export function toSuperCategory(superCategory : SuperCategory) : SuperCategory{
    return  {
        id : superCategory.id,
        name : superCategory.name
    }
}