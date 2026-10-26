import { Productdetails } from './Components/productdetails/productdetails';
import { Home } from './Components/home/home';
import { Routes } from '@angular/router';
import { Notfounddd } from './Components/notfounddd/notfounddd';
import { Productlist } from './Components/productlist/productlist';
import { Cartpage } from './Components/cart-page/cart-page';

export const routes: Routes = [
    {path:"",redirectTo:"Home",pathMatch:'full'},
    {path:"Home",loadComponent:()=>import("./Components/home/home").then((c)=>c.Home)},
    {path:"Products",loadComponent:()=>import("./Components/productlist/productlist").then((c)=>c.Productlist)},
    {path:"Addproduct",loadComponent:()=>import("./Components/addproduct/addproduct").then((c)=>c.Addproduct)},
    {path:"Productdetails/:id",loadComponent:()=>import("./Components/productdetails/productdetails").then((c)=>c.Productdetails)},
    {path:"Cart",loadComponent:()=>import("./Components/cart-page/cart-page").then((c)=>c.Cartpage)},
    {path:"**",component:Notfounddd}
];
                                            