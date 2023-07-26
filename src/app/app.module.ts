import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import {NgOptimizedImage} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatsComponent } from './components/stats/stats.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
