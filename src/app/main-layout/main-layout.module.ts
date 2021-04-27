import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainLayoutRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainLayoutComponent]
})
export class MainLayoutModule { }
