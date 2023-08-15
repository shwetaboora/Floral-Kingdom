import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlowerComponent } from './flower/flower.component';
import { AboutComponent } from './about/about.component';
import { NgImageSliderModule } from 'ng-image-slider';
import{HttpClientModule}from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    NavbarComponent,
    FlowerComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,  
    HttpClientModule,
    NgImageSliderModule


  ],
  providers: [Demo1Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
