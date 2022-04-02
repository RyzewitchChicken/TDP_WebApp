import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionRolService } from 'src/services/function-rol.service';
import { FunctionService } from 'src/services/function.service';
import { RolesService } from 'src/services/roles.service';

@Component({
  selector: 'app-register-function-rol',
  templateUrl: './register-function-rol.component.html',
  styleUrls: ['./register-function-rol.component.css']
})
export class RegisterFunctionRolComponent implements OnInit {

  roles:any[]=[];
  funciones:any[]=[];
  registerFuncrol: FormGroup;
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



  getRoles(){
    this.rolService.getRoles().subscribe(data=>{
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

  getFunciones(){
    this.functionService.getFuncs().subscribe(data=>{
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


  AgregarFunrol(){
    console.log(this.registerFuncrol);
    const funrol: any ={
      rol:this.registerFuncrol.value.rol,
      funcion:this.registerFuncrol.value.funcion
    }
    this.funrolService.agregarFunrol(funrol).then(()=>{
      console.log('Rol registrado con exito')
    }).catch(error=>{
      console.log(error);
    })
  }
}
