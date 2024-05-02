import { Address } from "@prisma/client";


export type AddressRequest = {
    mitra_id: number;
    outlet_name: string;
    street: string;
    city: string;
    province: string;
    postal_code: string;
}


export type AddressResponse = {
    id: number;
    outlet_name: string;
    street: string;
    city: string;
    province: string;
    postal_code: string;
}

export type AddressResponses = AddressResponse[];

export function toAddressResponse(address: Address): AddressResponse {
    return {
        id: address.id,
        outlet_name: address.outlet_name,
        street: address.street,
        city: address.city,
        province: address.province,
        postal_code: address.postal_code,
    };
}

export function toAddressResponses(addresses: Address[]): AddressResponses {
    return addresses.map(toAddressResponse);
}

