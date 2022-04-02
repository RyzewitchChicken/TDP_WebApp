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
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RolesService } from 'src/services/roles.service';
import { ModifyRolesComponent } from './roles/modify-roles/modify-roles.component';
import { DevicesComponent } from './devices/devices.component';
import { RegisterDevicesComponent } from './devices/register-devices/register-devices.component';
import { ModifyDevicesComponent } from './devices/modify-devices/modify-devices.component';
import { FunctionComponent } from './function/function.component';
import { RegisterFunctionComponent } from './function/register-function/register-function.component';
import { ModifyFunctionComponent } from './function/modify-function/modify-function.component';
import { FunctionRolComponent } from './function-rol/function-rol.component';
import { RegisterFunctionRolComponent } from './function-rol/register-function-rol/register-function-rol.component';
import { ModifyFunctionRolComponent } from './function-rol/modify-function-rol/modify-function-rol.component';




const root: Routes=[
  
  {path:'', component:RegisterDataComponent},
  {path:'updateFmProducts/:id', component:UpdateDataComponent},
  {path:'listFmProducts', component:ListProductComponent},
  {path:'roles', component:RolesComponent},
  {path:'registerRoles',component:RegistroRolesComponent},
  {path:'modifyRoles/:id',component:ModifyRolesComponent},
  {path:'products', component:ProductsComponent},
  {path:'registerProducts',component:RegistrarProductComponent},
  {path:'modifyProducts/:id',component:ModificarProductComponent},
  {path:'users', component:UserComponent},
  {path:'registerUsers',component:RegistrarUserComponent},
  {path:'modifyUsers/:id',component:ModificarUserComponent},
  {path:'camiones', component:CamionesComponent},
  {path:'registerCamiones',component:RegistrarCamionesComponent},
  {path:'modifyCamiones/:id',component:ModificarCamionesComponent},
  {path:'login', component:LoginComponent},
  {path:'devices', component:DevicesComponent},
  {path:'registerDevices',component:RegisterDevicesComponent},
  {path:'modifyDevices/:id',component:ModifyDevicesComponent},
  {path:'funciones', component:FunctionComponent},
  {path:'registerFunciones',component:RegisterFunctionComponent},
  {path:'modifyFunciones/:id',component:ModifyFunctionComponent},
  {path:'Funcionrol', component:FunctionRolComponent},
  {path:'registerFuncionrol',component:RegisterFunctionRolComponent},
  {path:'modifyFuncionrol/:id',component:ModifyFunctionRolComponent},
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
    ProductsComponent,
    RegistrarProductComponent,
    ModificarProductComponent,
    UserComponent,
    RegistrarUserComponent,
    ModificarUserComponent,
    CamionesComponent,
    RegistrarCamionesComponent,
    ModificarCamionesComponent,
    LoginComponent,
    ModifyRolesComponent,
    DevicesComponent,
    RegisterDevicesComponent,
    ModifyDevicesComponent,
    FunctionComponent,
    RegisterFunctionComponent,
    ModifyFunctionComponent,
    FunctionRolComponent,
    RegisterFunctionRolComponent,
    ModifyFunctionRolComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(root),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
