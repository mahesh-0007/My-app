import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name:string="";
  public price:number=0;
  public quantity:number=0;

  public carts:any=[
    {name:'mobile',price:10000,quantity:10},
    {name:'shirt',price:1000,quantity:20},
    {name:'shoes',price:2000,quantity:30}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cart(){
    let cart ={
      name:this.name,
      price:this.price,
      quality:this.quantity

    }
    this.carts.push(cart);

    this.name="";
    this.price=0;
    this.quantity=0;

    alert(" Add to cart succesfully !!!");
  }
  delete(i:number){
    this.carts.splice(i,1);

  }

}
