import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CamionesService } from 'src/services/camiones.service';

@Component({
  selector: 'app-registrar-camiones',
  templateUrl: './registrar-camiones.component.html',
  styleUrls: ['./registrar-camiones.component.css']
})
export class RegistrarCamionesComponent implements OnInit {
  registerCamiones: FormGroup;
  constructor(private ca:FormBuilder, private camionService:CamionesService) {
    this.registerCamiones=this.ca.group({
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      foto: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  AgregarCamion(){
    console.log(this.registerCamiones);
    const camion: any ={
      placa:this.registerCamiones.value.placa,
      marca:this.registerCamiones.value.marca,
      foto:this.registerCamiones.value.foto
    }
    this.camionService.agregarCamion(camion).then(()=>{
      console.log('Camion registrado con exito')
    }).catch(error=>{
      console.log(error);
    })
  }
}
