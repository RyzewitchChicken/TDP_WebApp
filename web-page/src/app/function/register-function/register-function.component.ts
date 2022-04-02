import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionService } from 'src/services/function.service';

@Component({
  selector: 'app-register-function',
  templateUrl: './register-function.component.html',
  styleUrls: ['./register-function.component.css']
})
export class RegisterFunctionComponent implements OnInit {

  registerfunction: FormGroup;
  constructor(private functionService:FunctionService, private fu:FormBuilder) {
    this.registerfunction=this.fu.group({
      name: ['', Validators.required]


    })
   }

  ngOnInit(): void {
  }

  AgregarFunc(){
    console.log(this.registerfunction);
    const func: any ={
      name:this.registerfunction.value.name
    }
    this.functionService.agregarFunc(func).then(()=>{
      console.log('Familia registrado con exito')
    }).catch(error=>{
      console.log(error);
    })
  }

}
