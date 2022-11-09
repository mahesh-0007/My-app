import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any = [];
  public term:string ="";
  public column:string="";
  public order:string="";

  constructor(private _bankService:BankService,private router:Router) {

    this._bankService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;  
      },
      (error:any)=>{
        alert("Internal server errror");
      }
    )
   }

  ngOnInit(): void {
  }

  filter(){
    this._bankService.getFilterdAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
        (error:any)=>{
          alert("server Down");
        }

    ) 
  }

pagination(page:number){
  this._bankService.getPagedAccounts(page).subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (error:any)=>{
      alert("internal server error");
    }
  )
}

sort(){
  this._bankService.getsortedAccounts(this.column,this.order).subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (error:any)=>{
      alert("internal server error");
    }
  )
}

delete(id:string){
      this._bankService.deleteAccount(id).subscribe(
        (data:any)=>{
          alert("delete succesfully!");
          location.reload();
        },
        (error:any)=>{
          alert("internal server error");
        }
      )
}

view(id:string){
    this.router.navigateByUrl('/dashboard/bank-details/'+id);
}
edit(id:string){
     this.router.navigateByUrl('/dashboard/edit-account/'+id);
}

}
