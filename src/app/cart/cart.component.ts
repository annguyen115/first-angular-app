import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // item in cart
  items;

  // store the form model
  checkoutForm;

  constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder,
  ) {
    // create form model for checkoutForm
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    })
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here

    // empty item in cart
    this.items = this.cartService.clearCart();

    // empty form = reset form
    this.checkoutForm.reset()

    alert('Your order has been submitted: '+ JSON.stringify(customerData));
  }
}
