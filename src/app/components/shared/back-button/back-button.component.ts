import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {
  @Input() url!: string;
  @Input() buttonText!: string;

  constructor(private router: Router) { }

  goBack(): void {
    this.router.navigateByUrl(this.url);
  }
}
