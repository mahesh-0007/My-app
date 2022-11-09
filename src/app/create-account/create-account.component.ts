import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountForm:FormGroup = new FormGroup(
    {
      createAdt: new FormControl(),
      account_name: new FormControl(),
      availabel_balance: new FormControl(),
      currency: new FormControl(),
      user_image: new FormControl(),
      account_number: new FormControl()

    }

  )

  public id:string="";

  constructor(private _bankservice:BankService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (data:any)=>{
       this.id=data.id;

       this._bankservice.getAccount(this.id).subscribe(
        (data:any)=>{
          this.accountForm.patchValue(data);
        }
       )
      }
    )
   }

  ngOnInit(): void {
  }

  submit(){

    // edit
    if(this.id){
     
      this._bankservice.updateAccount(this.id,this.accountForm.value).subscribe(
        (data:any)=>{
          alert("updated succesfully");
        },
        (error:any)=>{
          alert("internal server error");
        }
      )
      
    }

    // create
    else{
      this._bankservice.createAccount(this.accountForm.value).subscribe(
        (data:any)=>{
          alert("created succesfully");
        },
        (error:any)=>{
          alert("internal server error");
        }
      )
    }

  }

}
