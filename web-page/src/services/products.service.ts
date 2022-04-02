import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }

  agregarProduct(product:any): Promise<any> {
    return this.firestore.collection('Products').add(product);
  }

  getProducts(): Observable<any> {
    return this.firestore.collection('Products').snapshotChanges();
  }

  deleteProduct(id:string):Promise<any> {
    return this.firestore.collection('Products').doc(id).delete();
  }
  getProduct(id:string):Observable<any>{
    return this.firestore.collection('Products').doc(id).snapshotChanges();
  }

  editProduct(id:string, data:any):Promise<any>{
    return this.firestore.collection('Products').doc(id).update(data);
  }
}
