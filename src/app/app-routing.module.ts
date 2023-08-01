import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReceivedComponent} from "./components/received/received.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SentComponent} from "./components/sent/sent.component";
import {AddMariosComponent} from "./components/add-marios/add-marios.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'received', component: ReceivedComponent },
  { path: 'sent', component: SentComponent },
  { path: 'add', component: AddMariosComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
