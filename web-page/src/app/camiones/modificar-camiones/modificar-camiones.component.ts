import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CamionesService } from 'src/services/camiones.service';

@Component({
  selector: 'app-modificar-camiones',
  templateUrl: './modificar-camiones.component.html',
  styleUrls: ['./modificar-camiones.component.css']
})
export class ModificarCamionesComponent implements OnInit {
  registerCamiones: FormGroup;
  id:string|null;
  constructor(private ca:FormBuilder, private camionService:CamionesService, private aRoute:ActivatedRoute) {
    this.registerCamiones=this.ca.group({
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      foto: ['', Validators.required]
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    if(this.id !== null){
      this.camionService.getCamion(this.id).subscribe(data =>{
        console.log(data.payload.data()['placa']);
        this.registerCamiones.setValue({
          placa:data.payload.data()['placa'],
          marca:data.payload.data()['marca'],
          foto:data.payload.data()['foto']
        })
      })
    }
  }

  editCamion(){

    const camion: any ={
      placa:this.registerCamiones.value.placa,
      marca:this.registerCamiones.value.marca,
      foto:this.registerCamiones.value.foto
    }
    this.camionService.editCamion(this.id,camion);
  }
}
