import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  public vehicle:any=[];
  public id:string="";

  constructor(private _vehicleService:VehicleService,private _activatedRoute:ActivatedRoute) { 

    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this.vehicle=this.id;
        this._vehicleService.getvehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;

          }
        )

      },
      (error:any)=>{
        alert("internal server error");
      }
    )
  }

  ngOnInit(): void {
  }

}
