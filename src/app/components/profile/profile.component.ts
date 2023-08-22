import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Marios} from "../../interfaces/marios";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public allMarios: Marios[] = [];
  public receivedMarios: Marios[] = [];
  public sentMarios: Marios[] = [];

  constructor(public userService: UserService, public router: Router) {
  }

  ngOnInit() {
    this.userService.AllMarios
      .subscribe((marios: Marios[]) => {
        this.allMarios = marios;
        this.allMarios.sort((a, b) => b.timestamp.getDate() - a.timestamp.getDate());
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

  onClickAddButton() {
    this.router.navigateByUrl("/add");
  }
}
