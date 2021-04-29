import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BookingModule } from '../share/component/booking.module';
@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BookingModule,
    BrowserAnimationsModule,
    MainLayoutRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [MainLayoutComponent]
})
export class MainLayoutModule { }
