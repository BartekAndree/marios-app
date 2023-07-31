import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MariosDialogComponent} from "../shared/marios-dialog/marios-dialog.component";

@Component({
  selector: 'app-marios-grid',
  templateUrl: './marios-grid.component.html',
  styleUrls: ['./marios-grid.component.css']
})
export class MariosGridComponent {
  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(MariosDialogComponent);
  }
}
