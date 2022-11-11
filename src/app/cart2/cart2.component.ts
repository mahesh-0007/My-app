import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component implements OnInit {

  public cart2Count:number=0;

  constructor(private commonService:CommonService) { 
    this.commonService.getValue().subscribe(
      (data:any)=>{
        this.cart2Count=data;
      }
    )
  }

  ngOnInit(): void {
  }

}
