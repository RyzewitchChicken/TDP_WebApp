import { Component, OnInit } from '@angular/core';
import { CamionesService } from 'src/services/camiones.service';

@Component({
  selector: 'app-camiones',
  templateUrl: './camiones.component.html',
  styleUrls: ['./camiones.component.css']
})
export class CamionesComponent implements OnInit {
  Camiones:any[]=[];
  constructor(private camionService:CamionesService) { }

  ngOnInit(): void {
    this.getCamiones();
  }

  getCamiones(){
    this.camionService.getCamiones().subscribe(data=>{
      this.Camiones=[];
      data.forEach((element:any)=>{
        
        this.Camiones.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
      console.log(this.Camiones);
    });
  }
  deleteCamion(id:string){
    this.camionService.deleteCamion(id).then(()=>{
      console.log("Familia eliminada");
    }).catch(error=>{
      console.log(error);
    })
  }
}
