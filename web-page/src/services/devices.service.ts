import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private firestore:AngularFirestore) { }

  agregarDevice(device:any): Promise<any> {
    return this.firestore.collection('Devices').add(device);
  }

  getDevices(): Observable<any> {
    return this.firestore.collection('Devices').snapshotChanges();
  }

  deleteDevice(id:string):Promise<any> {
    return this.firestore.collection('Devices').doc(id).delete();
  }
  getDevice(id:string):Observable<any>{
    return this.firestore.collection('Devices').doc(id).snapshotChanges();
  }

  editDevice(id:string, data:any):Promise<any>{
    return this.firestore.collection('Devices').doc(id).update(data);
  }
}
