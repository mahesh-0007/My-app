import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  public name: string="";
  public age:number=0;
  public company:string="";
  public package:number=0;

  public employees:any=[
    {name:'Ajay', age:20, company:'tcs', package:10},
    {name:'Anil', age:15, company:'hcl', package:9}
    ]
  constructor() { }

  ngOnInit(): void {
  }
   
  register(){
    let employee = {
      name: this.name,
      age:this.age,
      company:this.company,
      package:this.package
    }
    this.employees.push(employee);

    this.name="";
    this.age=0;
    this.company="";
    this.package=0;

    alert("registed succesfully!!!");

  }
  delete(i:number){
    this.employees.splice(i,1);
  }
 
}
