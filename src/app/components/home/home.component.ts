import {Component} from '@angular/core';
import {PublicUser} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: PublicUser[] = [];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.publicUsers
      .subscribe((data: PublicUser[]) => {
        this.users = data;
      })
  }

  setActiveUser(uuid: string) {
    this.userService.setCurrentUser = uuid;
    this.router.navigate(['/profile']);
  }

}
