import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionRolService {

  constructor(private firestore:AngularFirestore) { }

  agregarFunrol(funrol:any): Promise<any> {
    return this.firestore.collection('Funrol').add(funrol);
  }

  getFunroles(): Observable<any> {
    return this.firestore.collection('Funrol').snapshotChanges();
  }

  deleteFunrol(id:string):Promise<any> {
    return this.firestore.collection('Funrol').doc(id).delete();
  }
  getFunrol(id:string):Observable<any>{
    return this.firestore.collection('Funrol').doc(id).snapshotChanges();
  }

  editFunrol(id:string, data:any):Promise<any>{
    return this.firestore.collection('Funrol').doc(id).update(data);
  }
}
