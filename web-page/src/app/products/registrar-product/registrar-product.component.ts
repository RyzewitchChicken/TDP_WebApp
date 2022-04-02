import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FamProductsService } from 'src/services/fam-products.service';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-registrar-product',
  templateUrl: './registrar-product.component.html',
  styleUrls: ['./registrar-product.component.css']
})
export class RegistrarProductComponent implements OnInit {
  registerProduct:FormGroup;
  famproduct:any[]=[];
  constructor(private pr:FormBuilder, private productService:ProductsService, private famproductService:FamProductsService) {
    this.registerProduct=this.pr.group({
      name: ['', Validators.required],
      description:['',Validators.required],
      fmproducts:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.getFmProducts();
  }

  AgregarProduct(){
    console.log(this.registerProduct);
    const product: any ={
      name:this.registerProduct.value.name,
      description:this.registerProduct.value.description,
      fmproducts:this.registerProduct.value.fmproducts
    }
    this.productService.agregarProduct(product).then(()=>{
      console.log('Producto registrado con exito')
    }).catch(error=>{
      console.log(error);
    })
  }

  getFmProducts(){
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
