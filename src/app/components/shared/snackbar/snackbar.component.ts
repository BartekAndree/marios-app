import {Component, inject, Inject} from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  selector: 'app-snackbar',
  standalone: true,
  styleUrls: ['./snackbar.component.css'],
  templateUrl: './snackbar.component.html',
})
export class SnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
  constructor(private _snackBar: MatSnackBar, @Inject(MAT_SNACK_BAR_DATA) public data: { message: string, action: string}) {
  }



}
