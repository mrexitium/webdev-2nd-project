import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Product } from "../product";

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit {
  products: Product[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }

}
