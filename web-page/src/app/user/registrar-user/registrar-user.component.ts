import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesService } from 'src/services/roles.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent implements OnInit {
  roles:any[]=[];
  registeruser: FormGroup;
  rolName: string;
  constructor(private us:FormBuilder,private rolService:RolesService, private userService:UsersService) { 
    this.registeruser=this.us.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      password: ['', Validators.required],
      birthdate: ['', Validators.required],
      rol:['', Validators.required]

    })
    //this.id=this.aRoute.snapshot.paramMap.get('id');
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


  AgregarUser(){
    console.log(this.registeruser);
    const user: any ={
      username:this.registeruser.value.username,
      name:this.registeruser.value.name,
      lastname:this.registeruser.value.lastname,
      password:this.registeruser.value.password,
      birthdate:this.registeruser.value.birthdate,
      rol:this.registeruser.value.rol
    }
    this.userService.agregarUser(user).then(()=>{
      console.log('Rol registrado con exito')
    }).catch(error=>{
      console.log(error);
    })
  }
}
