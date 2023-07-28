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
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MariosGridComponent } from './components/marios-grid/marios-grid.component';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatsComponent,
    MariosGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
