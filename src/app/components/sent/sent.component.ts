import { Component } from '@angular/core';
import {Marios} from "../../interfaces/marios";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent {
  sentMarios: Marios[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.SentMarios
      .subscribe((marios: Marios[]) => {
        this.sentMarios = marios;
      })
  }

}
