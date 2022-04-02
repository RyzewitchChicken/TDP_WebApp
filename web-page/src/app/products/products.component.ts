import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any[]=[];
  
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(data=>{
      this.products=[];
      data.forEach((element:any)=>{
        
        this.products.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
      console.log(this.products);
    });
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).then(()=>{
      console.log("producto eliminado");
    }).catch(error=>{
      console.log(error);
    })
  }
}
