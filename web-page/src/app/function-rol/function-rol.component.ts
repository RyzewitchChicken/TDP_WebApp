import { Component, OnInit } from '@angular/core';
import { FunctionRolService } from 'src/services/function-rol.service';

@Component({
  selector: 'app-function-rol',
  templateUrl: './function-rol.component.html',
  styleUrls: ['./function-rol.component.css']
})
export class FunctionRolComponent implements OnInit {

  funroles:any[]=[];
  constructor(private funrolService:FunctionRolService) { }

  ngOnInit(): void {
    this.getFunroles();
  }

  getFunroles(){
    this.funrolService.getFunroles().subscribe(data=>{
      this.funroles=[];
      data.forEach((element:any)=>{
        
        this.funroles.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
      console.log(this.funroles);
    });
  }

  deleteFunrol(id:string){
    this.funrolService.deleteFunrol(id).then(()=>{
      console.log("Rol eliminado");
    }).catch(error=>{
      console.log(error);
    })
  }

}
