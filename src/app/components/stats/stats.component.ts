import {Component, Input} from '@angular/core';
import {Marios} from "../../interfaces/marios";
import {count} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  constructor(public router: Router) {
  }
  private _receivedMarios: Marios[] = [];
  private _sentMarios: Marios[] = [];
  public countReceivedMarios: number = 0;
  public countSentMarios: number = 0;

  @Input()
  set receivedMarios(marios: Marios[]) {
    this._receivedMarios = marios;
    this.countReceivedMarios = this._receivedMarios.length;
  }

  @Input()
  set sentMarios(marios: Marios[]) {
    this._sentMarios = marios;
    this.countSentMarios = this._sentMarios.length;
  }

  calculatePosition(count: number): string {
    let position = '0px';
    const numberOfCharacters = count.toString().length;

    if (numberOfCharacters === 1) {
      position = '65px';
    } else if (numberOfCharacters === 2) {
      position = '35px';
    }

    return position;
  }

  onClickReceived() {
    this.router.navigateByUrl("/received");
  }
  onClickSent() {
    this.router.navigateByUrl("/sent");
  }


}
