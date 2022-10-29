import { Component, OnInit } from '@angular/core';
import { TypicodeService } from '../typicode.service';

@Component({
  selector: 'app-typicode',
  templateUrl: './typicode.component.html',
  styleUrls: ['./typicode.component.css']
})
export class TypicodeComponent implements OnInit {

  public typicodes:any=[];


  constructor(private _typicodeService:TypicodeService) {

    this._typicodeService.gettypicode().subscribe(

      (data:any)=>{
        this.typicodes=data;
      },
      (error:any)=>{
        alert("Internal server error");
      }
      )
    
   }

  ngOnInit(): void {
  }

}
