import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from 'src/services/devices.service';

@Component({
  selector: 'app-modify-devices',
  templateUrl: './modify-devices.component.html',
  styleUrls: ['./modify-devices.component.css']
})
export class ModifyDevicesComponent implements OnInit {

  registerDevices: FormGroup;
  id:string|null;
  constructor(private deviceService:DevicesService, private se:FormBuilder,
    private aRoute:ActivatedRoute) {
    this.registerDevices=this.se.group({
      name: ['', Validators.required],
      serie: ['', Validators.required]


    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    if(this.id !== null){
      this.deviceService.getDevice(this.id).subscribe(data =>{
        console.log(data.payload.data()['name']);
        this.registerDevices.setValue({
          name:data.payload.data()['name'],
          temperature:data.payload.data()['temperature'],
          humidity:data.payload.data()['humidity'],
          velocity:data.payload.data()['velocity']
        })
      })
    }
  }

  editDevice(){

    const device: any ={
      name:this.registerDevices.value.name,
      temperature:this.registerDevices.value.temperature
    }
    this.deviceService.editDevice(this.id,device);
  }

}
