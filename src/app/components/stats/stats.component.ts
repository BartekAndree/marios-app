import {Component, Input} from '@angular/core';
import {Marios} from "../../interfaces/marios";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
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

}
