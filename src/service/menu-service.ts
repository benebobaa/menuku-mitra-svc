import {Mitra} from "@prisma/client";
import {CreateMenuRequest, MenuResponse, toMenuResponse} from "../model/menu-model";
import {Validation} from "../validation/validation";
import {MenuValidation} from "../validation/menu-validation";
import {prismaClient} from "../application/database";

export class MenuService {
    static async create(mitra_id : number, request : CreateMenuRequest) : Promise<MenuResponse>{
        const menuRequest = Validation.validate(MenuValidation.CREATE_MENU, request)

        const recordMenu = {
            ...menuRequest,
            ...{mitra_id : mitra_id}
        }
        const menu = await prismaClient.menu.create({
            data : recordMenu
        })

        return toMenuResponse(menu)
    }

    static async list(mitra_id : number) : Promise<Array<MenuResponse>>{
    const menus= await prismaClient.menu.findMany({
        where : {
            mitra_id : mitra_id
        }
    })

        return menus.map(menu => toMenuResponse(menu))
    }


}