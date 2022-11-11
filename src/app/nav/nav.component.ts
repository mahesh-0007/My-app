import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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
