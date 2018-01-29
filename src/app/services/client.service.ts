import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Client } from '../models/Client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {

  clients: Observable<any[]>;
  client: AngularFireList<any>;

  constructor(public af: AngularFireDatabase) {
   this.client = this.af.list('/clients');
    this.clients = this.client.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getClients() {
    return this.clients;
  }
  newClient(client: Client) {
    console.log("push" + client);
    
    this.client.push(client);
  }
  getClient(id: string) {
    return (this.af.object('/clients/' + id)).valueChanges();
  }
  updateClient(id:string, client:Client){
    return this.client.update(id,client);
  }
  deleteClient(id:string){
    
   return this.client.remove(id);
  }
}
