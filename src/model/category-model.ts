import {Category, SuperCategory} from "@prisma/client";

export type CategoryRequest = {
    name : string,
    spcategory_id : number
}


export type CategoryResponse = {
    id : number,
    name : string
}

export function toCategory(category : Category) : SuperCategory{
    return  {
        id : category.id,
        name : category.name
    }
}