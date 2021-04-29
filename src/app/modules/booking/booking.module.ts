import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BookingRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [BookingComponent]
})
export class BookingModule { }
