import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpdateDataComponent } from './list-product/update-data/update-data.component';
import { RegisterDataComponent } from './list-product/register-data/register-data.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {  RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListProductComponent } from './list-product/list-product.component';
import { RolesComponent } from './roles/roles.component';
import { RegistroRolesComponent } from './roles/registro-roles/registro-roles.component';
import { ModificarRolesComponent } from './roles/modificar-roles/modificar-roles.component';
import { ProductsComponent } from './products/products.component';
import { RegistrarProductComponent } from './products/registrar-product/registrar-product.component';
import { ModificarProductComponent } from './products/modificar-product/modificar-product.component';
import { UserComponent } from './user/user.component';
import { RegistrarUserComponent } from './user/registrar-user/registrar-user.component';
import { ModificarUserComponent } from './user/modificar-user/modificar-user.component';
import { CamionesComponent } from './camiones/camiones.component';
import { RegistrarCamionesComponent } from './camiones/registrar-camiones/registrar-camiones.component';
import { ModificarCamionesComponent } from './camiones/modificar-camiones/modificar-camiones.component';
import { LoginComponent } from './login/login.component';

const root: Routes=[
  
  {path:'', component:RegisterDataComponent},
  {path:'updateFmProducts', component:UpdateDataComponent},
  {path:'listFmProducts', component:ListProductComponent},
  {path:'roles', component:RolesComponent},
  {path:'registerRoles',component:RegistroRolesComponent},
  {path:'modifyRoles',component:ModificarRolesComponent},
  {path:'products', component:ProductsComponent},
  {path:'registerProducts',component:RegistrarProductComponent},
  {path:'modifyProducts',component:ModificarProductComponent},
  {path:'users', component:UserComponent},
  {path:'registerUsers',component:RegistrarUserComponent},
  {path:'modifyUsers',component:ModificarUserComponent},
  {path:'camiones', component:CamionesComponent},
  {path:'registerCamiones',component:RegistrarCamionesComponent},
  {path:'modifyCamiones',component:ModificarCamionesComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UpdateDataComponent,
    RegisterDataComponent,
    SidebarComponent,
    ListProductComponent,
    RolesComponent,
    RegistroRolesComponent,
    ModificarRolesComponent,
    ProductsComponent,
    RegistrarProductComponent,
    ModificarProductComponent,
    UserComponent,
    RegistrarUserComponent,
    ModificarUserComponent,
    CamionesComponent,
    RegistrarCamionesComponent,
    ModificarCamionesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(root),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
