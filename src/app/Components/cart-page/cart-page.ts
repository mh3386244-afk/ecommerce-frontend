import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart';

@Component({
  imports: [RouterLink],
  selector: 'app-cartpage',
  styleUrl: './cart-page.css',
  templateUrl: './cart-page.html',
})
export class Cartpage {
  cart = inject(CartService);
}