import { DbBase } from "./dbBase.model";
import { DbPersonBase } from "./dbPersonBase.model";

export interface Availability {
    isAvailable: boolean;
    stockDate?: Date;
}

export interface Item extends DbBase {
    name: string;
    category: string;
    quantity: number;
    description: string;
    img: string; //Link to the image
    suppliers: string[];
    lastOrderedTo: string; //SUPPLIER
    availability: Availability
    location?: string;
    brand?: string;
    model?: string;
    serial?: string;
}
