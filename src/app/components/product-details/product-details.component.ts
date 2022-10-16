import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getName(){
    return "Shubhayu Shrestha"
  }

  getPhoneNumber(){
    return "555-555-12345"
  }

}
