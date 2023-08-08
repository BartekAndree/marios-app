import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../services/user.service";
import {PublicUser} from "../../interfaces/user";
import {MariosService} from "../../services/marios.service";
import {PayloadMarios} from "../../interfaces/marios";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "../shared/snackbar/snackbar.component";

@Component({
  selector: 'app-add-marios',
  templateUrl: 'add-marios.component.html',
  styleUrls: ['add-marios.component.css']
})
export class AddMariosComponent implements OnInit {
  form: FormGroup;
  users: PublicUser[] = [];
  categories: string[] = [];

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private mariosService: MariosService,
              private _snackBar: MatSnackBar) {
    this
      .form = this.formBuilder.group({
      selectedUser: ['', Validators.required],
      selectedCategory: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      comment: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  ngOnInit()
    :
    void {
    this.userService.publicUsers
      .subscribe((data: PublicUser[]) => {
        this.users = data;
        this.users = this.userService.removeElementFromPublicUserListByUUID(this.users, this.userService.getCurrentUser);
      })
    this.categories = this.mariosService.categories;
  }

  onSubmit(): void {
    console.log(this.form.value);

    if (this.form.invalid) {
      console.error('Form is not valid. Please fill all required fields properly.');
    } else {
      for (let singleSelectedUser of this.form.value.selectedUser) {
        let payloadMarios: PayloadMarios = {
          senderId: this.userService.getCurrentUser,
          receiverId: singleSelectedUser,
          type: this.form.value.selectedCategory,
          title: this.form.value.title,
          comment: this.form.value.comment
        }
        this.mariosService.addMarios(payloadMarios);
      }

      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 5000,
        data: {message: 'Mario sent successfully!', action: 'Close'},
        panelClass: 'snackbar-success',
      });
      this.form.reset();
    }
  }
}
