import { Component, OnInit } from '@angular/core';
import { FamProductsService } from 'src/services/fam-products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  famProducts:any[]=[];
  constructor(private famProductService:FamProductsService) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(){
    this.famProductService.getFamProducts().subscribe(data=>{
      this.famProducts=[];
      data.forEach((element:any)=>{
        
        this.famProducts.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
      console.log(this.famProducts);
    });
  }
  deleteFamProduct(id:string){
    this.famProductService.deleteFamProduct(id).then(()=>{
      console.log("Familia eliminada");
    }).catch(error=>{
      console.log(error);
    })
  }
}
