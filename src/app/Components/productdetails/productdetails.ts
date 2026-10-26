import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../cart';

@Component({
  imports: [RouterLink],
  selector: 'app-productdetails',
  styleUrl: './productdetails.css',
  templateUrl: './productdetails.html',
})
export class Productdetails implements OnInit {

  product = signal<any>(null);
  loading = signal(true);
  error = signal(false);

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
     private cart: CartService
  ) {}
  added = signal(false);
  addToCart() {
  this.cart.add(this.product());
  this.added.set(true);
  setTimeout(() => this.added.set(false), 2000);
}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.http
      .get<any>(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .subscribe({
        next: (res) => {
          this.product.set(res.data);
          this.loading.set(false);
        },
        error: (err) => {
          console.log('Error:', err);
          this.error.set(true);
          this.loading.set(false);
        }
      });
  }
}