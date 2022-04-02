import { Component, OnInit } from '@angular/core';
import { FunctionService } from 'src/services/function.service';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {

  functions:any[]=[];
  constructor(private functionService:FunctionService) { }

  ngOnInit(): void {
    this.getFuncs();
  }

  getFuncs(){
    this.functionService.getFuncs().subscribe(data=>{
      this.functions=[];
      data.forEach((element:any)=>{
        
        this.functions.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
      console.log(this.functions);
    });
  }
  deleteFunc(id:string){
    this.functionService.deleteFunc(id).then(()=>{
      console.log("Familia eliminada");
    }).catch(error=>{
      console.log(error);
    })
  }
}
