import { Injectable } from "@angular/core";
import { productData } from "./product-data";
import { Product } from "./product";

@Injectable()
export class DataService {
    
    constructor() { }

    getProducts(): Product[] {
        return productData;
    }

    getProductById(id): Product {
        return productData.filter(product => product._id === id)[0];
    }
}