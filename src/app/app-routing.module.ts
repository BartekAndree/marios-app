import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReceivedComponent} from "./components/received/received.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SentComponent} from "./components/sent/sent.component";
import {AddMariosComponent} from "./components/add-marios/add-marios.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./authentication/auth.guard";

const routes: Routes = [
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard] },
  { path: 'received', component: ReceivedComponent, canActivate: [AuthGuard] },
  { path: 'sent', component: SentComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddMariosComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
