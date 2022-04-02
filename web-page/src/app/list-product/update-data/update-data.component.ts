import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FamProductsService } from 'src/services/fam-products.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  registerfamProducts:FormGroup;
  id:string|null;
  constructor(private famProductService:FamProductsService, private aRoute:ActivatedRoute, private fam:FormBuilder) { 
    this.registerfamProducts=this.fam.group({
      name: ['', Validators.required],
      temperature: ['', Validators.required],
      humidity: ['', Validators.required],
      velocity: ['', Validators.required]


    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    if(this.id !== null){
      this.famProductService.getFamProduct(this.id).subscribe(data =>{
        console.log(data.payload.data()['name']);
        this.registerfamProducts.setValue({
          name:data.payload.data()['name'],
          temperature:data.payload.data()['temperature'],
          humidity:data.payload.data()['humidity'],
          velocity:data.payload.data()['velocity']
        })
      })
    }
  }

  editfamProduct(){

    const famproduct: any ={
      name:this.registerfamProducts.value.name,
      temperature:this.registerfamProducts.value.temperature,
      humidity:this.registerfamProducts.value.humidity,
      velocity:this.registerfamProducts.value.velocity
    }
    this.famProductService.editFamProduct(this.id,famproduct);
  }


}
