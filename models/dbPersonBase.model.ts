import { DbBase } from "./dbBase.model";

//TODO: CREATE ADDRESS INTERFACE

/**
 *  Employee: handles store
 *      roles: Admin, manager, clerk
 *  supplier: supplies the store
 *  user: uses the store  
 * 
 */

export type InternalRole = 'admin' | 'manager' | 'clerk';
export type ExternalRole = 'accounting' | 'sales' | 'shipping' | 'management';

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
    role: ExternalRole;
    cellPhone: string;
}

export interface Supplier extends DbPersonBase {
    items: string[];
    website: string;
    contacts: SupplierContact[];
}

export interface Employee extends DbPersonBase {
    role: InternalRole;
    cellPhone: string;
}

export interface User extends DbPersonBase {
    //TODO: WHEN WE CREATE STORE FRONT
} 


