import { prismaClient } from "../application/database";
import { AddressRequest, AddressResponse, AddressResponses, toAddressResponse, toAddressResponses } from "../model/address-model";
import { AddressValidation } from "../validation/address-validation";
import { Validation } from "../validation/validation";


export class AddressService {


    static async create(request: AddressRequest): Promise<AddressResponse> {
        
        const addressRequest = Validation.validate(AddressValidation.CREATE, request);

        const address = await prismaClient.address.create({
            data: addressRequest,
        });

        return toAddressResponse(address);
    }

    static async get(mitraId: number): Promise<AddressResponses> {

        const addresses = await prismaClient.address.findMany({
                where: {
                    mitra_id: mitraId,
                },
            });
        
        return toAddressResponses(addresses);
    }
}