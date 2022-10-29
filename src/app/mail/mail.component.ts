import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public mails:any=[];

  constructor(private _mailservice:MailService) {

    this._mailservice.getmail().subscribe(

      (data:any)=>{
        this.mails = data;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
   }

  ngOnInit(): void {
  }

}
