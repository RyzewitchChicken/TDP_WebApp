import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { RolesService } from 'src/services/roles.service';

@Component({
  selector: 'app-registro-roles',
  templateUrl: './registro-roles.component.html',
  styleUrls: ['./registro-roles.component.css']
})
export class RegistroRolesComponent implements OnInit {

  registerRol: FormGroup;
  submitted=false;
  id:string | null;
  titulo='Registrar Rol';

  constructor(private re:FormBuilder, private rolService:RolesService, private aRoute:ActivatedRoute) {
    this.registerRol=this.re.group({
      nombre: ['', Validators.required]
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
    

   }

  ngOnInit(): void {
    //this.getData();

  }
  

  AgregarRol(){
    console.log(this.registerRol);
    const rol: any ={
      nombre:this.registerRol.value.nombre
    }
    this.rolService.agregarRol(rol).then(()=>{
      console.log('Rol registrado con exito')
    }).catch(error=>{
      console.log(error);
    })
  }



  

}
