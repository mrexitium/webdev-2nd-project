import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Product } from "../product";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-collection-products',
  templateUrl: './collection-products.component.html',
  styleUrls: ['./collection-products.component.scss']
})
export class CollectionProductsComponent implements OnInit {
  products: Product[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }
}
