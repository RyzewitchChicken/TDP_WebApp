import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FamProductsService } from 'src/services/fam-products.service';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-modificar-product',
  templateUrl: './modificar-product.component.html',
  styleUrls: ['./modificar-product.component.css']
})
export class ModificarProductComponent implements OnInit {
  registerProduct:FormGroup;
  famproduct:any[]=[];
  id:string|null;
  constructor(private aRoute:ActivatedRoute,private pr:FormBuilder, private productService:ProductsService, private famproductService:FamProductsService) { 
    this.registerProduct=this.pr.group({
      name: ['', Validators.required],
      description:['',Validators.required],
      fmproducts:['',Validators.required]
    })
    this.id=this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getData();
    this.getFamProducts();
    
  }
  getData(){
    if(this.id !== null){
      this.productService.getProduct(this.id).subscribe(data =>{
        console.log(data.payload.data()['name']);
        this.registerProduct.setValue({
          name:data.payload.data()['name'],
          description:data.payload.data()['description'],
          fmproducts:data.payload.data()['fmproducts']

        })
      })
    }
  }

  editProduct(){

    const product: any ={
      name:this.registerProduct.value.name,
      description:this.registerProduct.value.description,
      fmproducts:this.registerProduct.value.fmproducts
    }
    this.productService.editProduct(this.id,product);
  }

  getFamProducts(){
    this.famproductService.getFamProducts().subscribe(data=>{
      this.famproduct=[];
      data.forEach((element:any)=>{
        
        this.famproduct.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
      console.log(this.famproduct);
    });
  }
}
