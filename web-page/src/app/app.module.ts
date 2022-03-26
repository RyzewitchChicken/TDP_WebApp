import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { RegisterDataComponent } from './register-data/register-data.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {  RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListProductComponent } from './list-product/list-product.component';

const root: Routes=[
  
  {path:'', component:RegisterDataComponent},
  {path:'update', component:UpdateDataComponent},
  {path:'list', component:ListProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UpdateDataComponent,
    RegisterDataComponent,
    SidebarComponent,
    ListProductComponent
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
