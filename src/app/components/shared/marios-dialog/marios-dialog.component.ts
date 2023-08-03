import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MariosGridComponent} from "../../marios-grid/marios-grid.component";
import {Marios} from "../../../interfaces/marios";

@Component({
  selector: 'app-marios-dialog',
  templateUrl: './marios-dialog.component.html',
  styleUrls: ['./marios-dialog.component.css']
})
export class MariosDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { marios: Marios, user: string },
              public dialogRef: MatDialogRef<MariosGridComponent>) {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
