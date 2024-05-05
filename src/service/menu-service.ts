import {Mitra} from "@prisma/client";
import {CreateMenuRequest, MenuResponse, toMenuResponse, UpdateMenuRequest} from "../model/menu-model";
import {Validation} from "../validation/validation";
import {MenuValidation} from "../validation/menu-validation";
import {prismaClient} from "../application/database";
import {ResponseError} from "../error/response-error";

export class MenuService {
    static async create(mitra_id: number, request: CreateMenuRequest): Promise<MenuResponse> {
        const createRequest = Validation.validate(MenuValidation.CREATE_MENU, request)

        const recordMenu = {
            ...createRequest,
            ...{mitra_id: mitra_id}
        }
        const menu = await prismaClient.menu.create({
            data: recordMenu
        })

        return toMenuResponse(menu)
    }

    static async list(mitraId: number): Promise<Array<MenuResponse>> {
        const menus = await prismaClient.menu.findMany({
            where: {
                mitra_id: mitraId
            }
        })

        return menus.map(menu => toMenuResponse(menu))
    }


    static async update(mitraId: number, request: UpdateMenuRequest): Promise<MenuResponse> {
        const updateRequest = Validation.validate(MenuValidation.UPDATE_MENU, request)
        await this.checkMenuMustExists(mitraId, updateRequest.id)

        const menu = await prismaClient.menu.update({
            where: {
                id: updateRequest.id,
                mitra_id: mitraId
            },
            data: updateRequest
        })


        return toMenuResponse(menu)

    }





    static async checkMenuMustExists(mitraId: number, menuId: number) {
        const menu = await prismaClient.menu.findUnique({
            where: {
                id: menuId,
                mitra_id: mitraId
            }
        })

        if (!menu) {
            throw new ResponseError(404, "Menu Not Found")
        }


        return menu

    }
}