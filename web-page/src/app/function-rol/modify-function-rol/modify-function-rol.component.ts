import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionRolService } from 'src/services/function-rol.service';
import { FunctionService } from 'src/services/function.service';
import { RolesService } from 'src/services/roles.service';

@Component({
  selector: 'app-modify-function-rol',
  templateUrl: './modify-function-rol.component.html',
  styleUrls: ['./modify-function-rol.component.css']
})
export class ModifyFunctionRolComponent implements OnInit {

  roles:any[]=[];
  funciones:any[]=[];
  registerFuncrol: FormGroup;
  id:string|null;
  constructor(private fr:FormBuilder,private rolService:RolesService, private functionService:FunctionService,
    private funrolService:FunctionRolService) { 
    this.registerFuncrol=this.fr.group({
      rol: ['', Validators.required],
      funcion: ['', Validators.required]

    })
    //this.id=this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getRoles();
    this.getFunciones();
  }


  getData(){
    if(this.id !== null){
      this.funrolService.getFunrol(this.id).subscribe(data =>{
        console.log(data.payload.data()['rol']);
        this.registerFuncrol.setValue({
          rol:data.payload.data()['rol'],
          funcion:data.payload.data()['funcion']
        })
      })
    }
  }

  editRol(){

    const user: any ={
      rol:this.registerFuncrol.value.rol,
      funcion:this.registerFuncrol.value.funcion
    }
    this.funrolService.editFunrol(this.id,user);
  }

  getRoles(){
    this.rolService.getRoles().subscribe(data=>{
      this.funciones=[];
      data.forEach((element:any)=>{
        
        this.funciones.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
      console.log(this.funciones);
    });
  }

  getFunciones(){
    this.functionService.getFuncs().subscribe(data=>{
      this.roles=[];
      data.forEach((element:any)=>{
        
        this.roles.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
      console.log(this.roles);
    });
  }

}
