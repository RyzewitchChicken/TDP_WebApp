import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamProductsService {

  constructor(private firestore:AngularFirestore) { }

  agregarFamProduct(Famproduct:any): Promise<any> {
    return this.firestore.collection('FamProducts').add(Famproduct);
  }

  getFamProducts(): Observable<any> {
    return this.firestore.collection('FamProducts').snapshotChanges();
  }

  deleteFamProduct(id:string):Promise<any> {
    return this.firestore.collection('FamProducts').doc(id).delete();
  }
  getFamProduct(id:string):Observable<any>{
    return this.firestore.collection('FamProducts').doc(id).snapshotChanges();
  }

  editFamProduct(id:string, data:any):Promise<any>{
    return this.firestore.collection('FamProducts').doc(id).update(data);
  }
}
