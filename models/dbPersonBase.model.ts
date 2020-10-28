import { DbBase } from "./dbBase.model";

//TODO: CREATE ADDRESS INTERFACE

export interface DbPersonBase extends DbBase {
    name: string;
    email: string;
    phones: string[];
    addresses: string[];
    fax?: string;
    company?: string;
    img?: string;
}

export interface SupplierContact extends DbPersonBase  {
    role: string;
    cellPhone: string;
}

//extend basic db class for id and shet
export interface Supplier extends DbPersonBase {
    items: string[];
    website: string;
    contacts: SupplierContact[];
}

export interface Employee extends DbPersonBase {
    role: string;
    cellPhone: string;
}

export interface User extends DbPersonBase {

} 


