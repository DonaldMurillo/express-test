import { Item } from "./item.model";

export enum Gender {
    male = 'male',
    female = 'female',
    boy = 'boy',
    girl = 'girl'
}

export interface Clothing extends Item {
    size: number;
    color: string;
    gender: Gender
}