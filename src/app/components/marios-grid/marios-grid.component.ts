import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MariosDialogComponent} from "../shared/marios-dialog/marios-dialog.component";
import {Marios} from "../../interfaces/marios";

@Component({
  selector: 'app-marios-grid',
  templateUrl: './marios-grid.component.html',
  styleUrls: ['./marios-grid.component.css']
})
export class MariosGridComponent {
  @Input() marios: Marios[] = [];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(MariosDialogComponent);
  }
}
