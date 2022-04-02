import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FamProductsService } from 'src/services/fam-products.service';

@Component({
  selector: 'app-register-data',
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.css']
})
export class RegisterDataComponent implements OnInit {
  registerfamProducts: FormGroup;
  constructor(private famProduct:FamProductsService, private fam:FormBuilder) {
    this.registerfamProducts=this.fam.group({
      name: ['', Validators.required],
      temperature: ['', Validators.required],
      humidity: ['', Validators.required],
      velocity: ['', Validators.required]


    })
   }

  ngOnInit(): void {
  }

  AgregarFamProduct(){
    console.log(this.registerfamProducts);
    const user: any ={
      name:this.registerfamProducts.value.name,
      temperature:this.registerfamProducts.value.temperature,
      humidity:this.registerfamProducts.value.humidity,
      velocity:this.registerfamProducts.value.velocity,
    }
    this.famProduct.agregarFamProduct(user).then(()=>{
      console.log('Familia registrado con exito')
    }).catch(error=>{
      console.log(error);
    })
  }
}
