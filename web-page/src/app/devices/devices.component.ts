import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevicesService } from 'src/services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices:any[]=[];
  constructor(private deviceService:DevicesService) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(){
    this.deviceService.getDevices().subscribe(data=>{
      this.devices=[];
      data.forEach((element:any)=>{
        
        this.devices.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
      console.log(this.devices);
    });
  }
  deleteFamProduct(id:string){
    this.deviceService.deleteDevice(id).then(()=>{
      console.log("Familia eliminada");
    }).catch(error=>{
      console.log(error);
    })
  }

}
