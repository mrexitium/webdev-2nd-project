import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  items: Array<any> = [];
  
  constructor() { 
    this.items = [
      { name: 'assets/images/brand1.png' },
      { name: 'assets/images/brand2.png' },
      { name: 'assets/images/brand3.png' },
      { name: 'assets/images/brand4.png' },
      { name: 'assets/images/brand5.png' },
      { name: 'assets/images/brand1.png' },
      { name: 'assets/images/brand2.png' },
      { name: 'assets/images/brand3.png' },
      { name: 'assets/images/brand4.png' },
      { name: 'assets/images/brand5.png' },
      { name: 'assets/images/brand1.png' },
      { name: 'assets/images/brand2.png' },
      { name: 'assets/images/brand3.png' },
      { name: 'assets/images/brand4.png' },
      { name: 'assets/images/brand5.png' },
      { name: 'assets/images/brand1.png' },
      { name: 'assets/images/brand2.png' },
      { name: 'assets/images/brand3.png' },
      { name: 'assets/images/brand4.png' },
      { name: 'assets/images/brand5.png' },
    ]
  }

  ngOnInit() {
  }

}
