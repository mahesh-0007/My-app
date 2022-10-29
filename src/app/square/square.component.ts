import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {


   public length: number=0;
   public perimeter: number=0;
   public result:number=0;


  constructor() { }

  ngOnInit(): void {
  }
    area(){
      this.result =this.length*this.length
    }
    peremeter(){
      this.result = 4*this.length* this.length
    }

}
