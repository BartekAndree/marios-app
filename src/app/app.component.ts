import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marios-app';
  constructor(private router: Router) {
  }

  redirectToProfile() {
    this.router.navigate(['/home']);
  }
}
