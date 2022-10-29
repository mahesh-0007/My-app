import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  constructor(private _bankservice:BankService) { }

  ngOnInit(): void {
  }

  submit(){
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
