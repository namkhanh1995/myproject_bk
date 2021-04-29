import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    HttpClientModule
  ],
  providers: [],
  exports: [BookingComponent]
})
export class BookingModule { }
