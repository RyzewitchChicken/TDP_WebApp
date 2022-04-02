import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DevicesService } from 'src/services/devices.service';

@Component({
  selector: 'app-register-devices',
  templateUrl: './register-devices.component.html',
  styleUrls: ['./register-devices.component.css']
})
export class RegisterDevicesComponent implements OnInit {

  registerDevices: FormGroup;
  constructor(private deviceService:DevicesService, private se:FormBuilder) {
    this.registerDevices=this.se.group({
      name: ['', Validators.required],
      serie: ['', Validators.required]


    })
   }

  ngOnInit(): void {
  }

  AgregarFamProduct(){
    console.log(this.registerDevices);
    const device: any ={
      name:this.registerDevices.value.name,
      serie:this.registerDevices.value.serie
    }
    this.deviceService.agregarDevice(device).then(()=>{
      console.log('Familia registrado con exito')
    }).catch(error=>{
      console.log(error);
    })
  }

}
