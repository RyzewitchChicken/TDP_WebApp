import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RolesService } from 'src/services/roles.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-modificar-user',
  templateUrl: './modificar-user.component.html',
  styleUrls: ['./modificar-user.component.css']
})
export class ModificarUserComponent implements OnInit {
  registeruser: FormGroup;
  id: string|null;
  roles:any[]=[];
  constructor(private us:FormBuilder,private aRoute:ActivatedRoute, private userService:UsersService, private rolService:RolesService) {
    this.registeruser=this.us.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      birthdate: ['', Validators.required],
      rol:['', Validators.required]
  
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getData();
    this.getRoles();
  }


  getData(){
    if(this.id !== null){
      this.userService.getUser(this.id).subscribe(data =>{
        console.log(data.payload.data()['name']);
        this.registeruser.setValue({
          username:data.payload.data()['username'],
          name:data.payload.data()['name'],
          lastname:data.payload.data()['lastname'],
          password:data.payload.data()['password'],
          birthdate:data.payload.data()['birthdate'],
          rol:data.payload.data()['rol']
        })
      })
    }
  }

  editRol(){

    const user: any ={
      username:this.registeruser.value.username,
      name:this.registeruser.value.name,
      lastname:this.registeruser.value.lastname,
      password:this.registeruser.value.password,
      birthdate:this.registeruser.value.birthdate,
      rol:this.registeruser.value.rol
    }
    this.userService.editUser(this.id,user);
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
}
