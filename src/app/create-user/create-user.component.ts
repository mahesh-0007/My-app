import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public userForm: FormGroup=new FormGroup(
    {
      name: new FormControl(),
      phone: new FormControl(),
      dob: new FormControl(),
      address:new FormGroup(
        {
          city:new FormControl(),
          pin: new FormControl()
        }
      ),
      cards: new FormArray([]),
      type:new FormControl(),
      busFee:new FormControl(),
      hostelFee:new FormControl()
       
      }    
  )

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  add(){
    this.cardsFormArray.push(
      new FormGroup(
        {
          name: new FormControl(),
          expiry: new FormControl(),
          Cvv: new FormControl()
        }
      )
    )
  }

  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.userForm);
  }

}
