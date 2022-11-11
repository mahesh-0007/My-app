import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //sub create
  public cart2CountSub: BehaviorSubject<any>=new BehaviorSubject(0);
  public cart2Count:number=0;

  constructor() { }

  // set value to sub
     setValue(){
     this.cart2Count++;
     this.cart2CountSub.next(this.cart2Count);

     }


  // get value from sub
      getValue(){
     return this.cart2CountSub.asObservable();
      }
}
