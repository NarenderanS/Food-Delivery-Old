import { Address } from "./address";
import { Product } from "./product";

export interface Restaurant {
    id:number;
    userId:number;
    title:String;
    address:Address;
    products?:Product[]
}
