import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore:AngularFirestore) { }

  agregarUser(user:any): Promise<any> {
    return this.firestore.collection('Users').add(user);
  }

  getUsers(): Observable<any> {
    return this.firestore.collection('Users').snapshotChanges();
  }

  deleteUser(id:string):Promise<any> {
    return this.firestore.collection('Users').doc(id).delete();
  }
  getUser(id:string):Observable<any>{
    return this.firestore.collection('Users').doc(id).snapshotChanges();
  }

  editUser(id:string, data:any):Promise<any>{
    return this.firestore.collection('Users').doc(id).update(data);
  }
}
