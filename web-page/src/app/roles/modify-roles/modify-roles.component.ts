import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RolesService } from 'src/services/roles.service';

@Component({
  selector: 'app-modify-roles',
  templateUrl: './modify-roles.component.html',
  styleUrls: ['./modify-roles.component.css']
})
export class ModifyRolesComponent implements OnInit {
  registerRol: FormGroup;
  submitted=false;
  id:string | null;
  constructor(private re:FormBuilder, private rolService:RolesService, private aRoute:ActivatedRoute) {
    this.registerRol=this.re.group({
      nombre: ['', Validators.required]
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    if(this.id !== null){
      this.rolService.getRol(this.id).subscribe(data =>{
        console.log(data.payload.data()['nombre']);
        this.registerRol.setValue({
          nombre:data.payload.data()['nombre']
        })
      })
    }
  }

  editRol(){

    const rol: any ={
      nombre:this.registerRol.value.nombre
    }
    this.rolService.editRol(this.id,rol);
  }
}
