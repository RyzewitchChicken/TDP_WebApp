import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/services/roles.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any[]=[];
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(data=>{
      this.users=[];
      data.forEach((element:any)=>{
        
        this.users.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
      console.log(this.users);
    });
  }

  deleteUser(id:string){
    this.userService.deleteUser(id).then(()=>{
      console.log("Rol eliminado");
    }).catch(error=>{
      console.log(error);
    })
  }
}
