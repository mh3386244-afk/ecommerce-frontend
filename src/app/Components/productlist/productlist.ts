import { Component,OnInit,signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-productlist',
  styleUrl: './productlist.css',
  templateUrl: './productlist.html'
})
export class Productlist implements OnInit{

  data = signal<any[]>([]);

  constructor(private userservice: HttpClient) {}
  ngOnInit(): void {
    this.get_data();
  }
  get_data() {

    this.userservice
      .get<{data : any[]}>('https://ecommerce.routemisr.com/api/v1/products')
      .subscribe({

        next: (res) => {
          this.data.set(res.data);

          console.log("DATA:", this.data);
          console.log("LENGTH:", this.data.length);
        },

        error: (err) => {
          console.log("Error", err);
        },

        complete: () => {
          console.log("Everything is okkkkk");
        }

      });
  }

  
}