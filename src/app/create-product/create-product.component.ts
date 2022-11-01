import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public userForm: FormGroup=new FormGroup(
    {
      name:new FormControl(),
      price:new FormControl(),
      expiry:new FormControl(),
  

      
    }
  )
   
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.userForm);
  }

}
