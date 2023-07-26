import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('/api/user/all').subscribe(res => {
      console.log(res);
    });
  }
}
