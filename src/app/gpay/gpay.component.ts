import { Component, OnInit } from '@angular/core';
import { HdfcService } from '../hdfc.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent implements OnInit {

  public amount:number=0;

  constructor(private _hdfcservice:HdfcService) { }

  ngOnInit(): void {
  }
   
  withdraw(){
    this._hdfcservice.withdraw(this.amount);

  }
  deposit(){
    this._hdfcservice.deposit(this.amount);

  }
  balance(){
    alert(this._hdfcservice.getBalance() );
          
  }
  

}
