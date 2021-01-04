import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  // The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
  @Input() product;

  // In the component class, define a property named notify with an @Output() decorator and an instance of EventEmitter().
  // Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();
}
