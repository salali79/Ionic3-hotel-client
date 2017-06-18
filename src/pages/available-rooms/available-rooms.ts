import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-available-rooms',
  templateUrl: 'available-rooms.html',
})
export class AvailableRoomsPage {

  public rooms: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rooms = this.navParams.get('rooms');
  }


  public bookRoom(room: any) {
    this.navCtrl.push('BookingPage', {
      room: room,
      details: this.navParams.get('details')
    });
  }
}
