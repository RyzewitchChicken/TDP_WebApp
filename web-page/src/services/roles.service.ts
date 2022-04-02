import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private firestore: AngularFirestore) {

   }
   agregarRol(rol:any): Promise<any> {
     return this.firestore.collection('Roles').add(rol);
   }

   getRoles(): Observable<any> {
     return this.firestore.collection('Roles').snapshotChanges();
   }

   deleteRol(id:string):Promise<any> {
     return this.firestore.collection('Roles').doc(id).delete();
   }
   getRol(id:string):Observable<any>{
     return this.firestore.collection('Roles').doc(id).snapshotChanges();
   }

   editRol(id:string, data:any):Promise<any>{
     return this.firestore.collection('Roles').doc(id).update(data);
   }
}
