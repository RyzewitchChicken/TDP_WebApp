import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(private firestore:AngularFirestore) { }

  agregarFunc(fun:any): Promise<any> {
    return this.firestore.collection('Func').add(fun);
  }

  getFuncs(): Observable<any> {
    return this.firestore.collection('Func').snapshotChanges();
  }

  deleteFunc(id:string):Promise<any> {
    return this.firestore.collection('Func').doc(id).delete();
  }
  getFunc(id:string):Observable<any>{
    return this.firestore.collection('Func').doc(id).snapshotChanges();
  }

  editFunc(id:string, data:any):Promise<any>{
    return this.firestore.collection('Func').doc(id).update(data);
  }
}
