import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 @Input() public a:string="";
 @Output() public bEvent:EventEmitter<any>=new EventEmitter();

 public b:string="";
      

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    this.bEvent.emit(this.b);
  }

}
