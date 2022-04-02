import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FunctionService } from 'src/services/function.service';

@Component({
  selector: 'app-modify-function',
  templateUrl: './modify-function.component.html',
  styleUrls: ['./modify-function.component.css']
})
export class ModifyFunctionComponent implements OnInit {

  registerfunction: FormGroup;
  id:string|null;
  constructor(private aRoute:ActivatedRoute,private functionService:FunctionService, private fu:FormBuilder) {
    this.registerfunction=this.fu.group({
      name: ['', Validators.required]
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    if(this.id !== null){
      this.functionService.getFunc(this.id).subscribe(data =>{
        console.log(data.payload.data()['name']);
        this.registerfunction.setValue({
          name:data.payload.data()['name']
        })
      })
    }
  }

  editFunc(){

    const famproduct: any ={
      name:this.registerfunction.value.name
    }
    this.functionService.editFunc(this.id,famproduct);
  }
}
