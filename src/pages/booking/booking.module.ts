import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingPage } from './booking';
import {RoomsProvider} from "../../providers/rooms/rooms";

@NgModule({
  declarations: [
    BookingPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingPage),
  ],
  exports: [
    BookingPage
  ],
  providers: [
    RoomsProvider
  ]
})
export class BookingPageModule {}
