import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Marios} from "../../interfaces/marios";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  private USER: string = "d339b931-f7dd-4a55-ac20-abfdff1d948b";
  public allMarios: Marios[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getAllMariosByUuid(this.USER).subscribe(data => {
      this.allMarios = data
    })
  }
}
