import {Component, Input} from '@angular/core';
import {Marios} from "../../interfaces/marios";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent {
  receivedMarios: Marios[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.ReceivedMarios
      .subscribe((marios: Marios[]) => {
        this.receivedMarios = marios;
      })
  }

}
