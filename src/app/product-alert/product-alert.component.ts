import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  // The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

}
