import { Component, OnInit } from '@angular/core';

import { RolesService } from 'src/services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles:any[]=[];
  constructor(private rolService:RolesService) { 

  }

  ngOnInit(): void {
    this.getRoles();
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

  deleteRol(id:string){
    this.rolService.deleteRol(id).then(()=>{
      console.log("Rol eliminado");
    }).catch(error=>{
      console.log(error);
    })
  }

}
