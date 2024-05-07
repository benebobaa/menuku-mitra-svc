import {Menu} from "@prisma/client";
import {FileImage} from "../type/file-image";

export type CreateMenuRequest = {
    name: string
    description: string
    price: string
    image_url:  string
}


export type MenuResponse = {
    id: number
    name: string
    description: string
    price: string
    image_url: string
}

export type UpdateMenuRequest = {
    id : number
    name: string
    description: string
    price: string
    image_url: string
}


export function toMenuResponse(menu : Menu) : MenuResponse{
     return  {
         id : menu.id,
         name : menu.name,
         description : menu.description,
         price : menu.price,
         image_url : menu.image_url,
     }
}