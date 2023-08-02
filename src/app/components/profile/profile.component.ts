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

  public allMarios: Marios[] = [];
  public receivedMarios: Marios[] = [];
  public sentMarios: Marios[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.AllMarios
      .subscribe((marios: Marios[]) => {
        this.allMarios = marios;
        this.allMarios.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
      })
    this.userService.ReceivedMarios
    .subscribe((marios: Marios[]) => {
        this.receivedMarios = marios;
      })
    this.userService.SentMarios
      .subscribe((marios: Marios[]) => {
        this.sentMarios = marios;
      })
  }
}
