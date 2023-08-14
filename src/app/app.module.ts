import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './components/home/home.component';
import {NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StatsComponent} from './components/stats/stats.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MariosGridComponent} from './components/marios-grid/marios-grid.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {ReceivedComponent} from './components/received/received.component';
import {ProfileComponent} from './components/profile/profile.component';
import {SentComponent} from './components/sent/sent.component';
import {AddMariosComponent} from './components/add-marios/add-marios.component';
import {BackButtonComponent} from './components/shared/back-button/back-button.component';
import {MariosDialogComponent} from './components/shared/marios-dialog/marios-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatChipsModule} from "@angular/material/chips";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSelectModule} from "@angular/material/select";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'deloitte',
        clientId: 'marios-frontend'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatsComponent,
    MariosGridComponent,
    ReceivedComponent,
    ProfileComponent,
    SentComponent,
    AddMariosComponent,
    BackButtonComponent,
    MariosDialogComponent,
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
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatSnackBarModule,
    MatSelectModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
