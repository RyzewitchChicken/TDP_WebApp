import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CamionesService {

  constructor(private firestore:AngularFirestore) { }
  
  agregarCamion(camion:any): Promise<any> {
    return this.firestore.collection('Camiones').add(camion);
  }

  getCamiones(): Observable<any> {
    return this.firestore.collection('Camiones').snapshotChanges();
  }

  deleteCamion(id:string):Promise<any> {
    return this.firestore.collection('Camiones').doc(id).delete();
  }
  getCamion(id:string):Observable<any>{
    return this.firestore.collection('Camiones').doc(id).snapshotChanges();
  }

  editCamion(id:string, data:any):Promise<any>{
    return this.firestore.collection('Camiones').doc(id).update(data);
  }
}
