import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Client';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    //console.log("clientdeatil:");
    this.id = this.route.snapshot.params['id'];
    if (this.id.length > 0) {
      //console.log("clientdeatil:" + this.id);

    //  this.client = this.clientService.getClient(this.id) as Client;
    this.clientService.getClient(this.id).subscribe(client=>{
      console.log(this.client);
      
            
      this.client = client;
      if (this.client != null) {
        if (this.client.balance > 0) {
          this.hasBalance = true;
        }
      }
    });
      

    }
  }
  updateBalance(id: string) {
    this.clientService.updateClient(this.id, this.client);
    this.flashMessagesService.show('Balance Updated', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/client/' + this.id]);
  }
  onDeleteClick() {
    if (confirm("Are you sure to delete?")) {
      this.clientService.deleteClient(this.id);

      this.flashMessagesService.show("Client Deleted", { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/']);
    }
  }
}
