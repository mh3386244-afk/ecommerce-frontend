import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule],
  selector: 'app-addproduct',
  styleUrl: './addproduct.css',
  templateUrl: './addproduct.html',
})
export class Addproduct {

Model={
  Tittle:"",
  Price:"",
  Category:"",
  Quantity:"",
  Describtion:""
}


Onsubmit(x:any){
  if(x.valid){
    console.log("the data is true ",this.Model);
    
  }
}

}
