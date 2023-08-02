import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../../services/user.service";
import { PublicUser } from "../../interfaces/user";
import { MariosService } from "../../services/marios.service";
import {PayloadMarios} from "../../interfaces/marios";

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
              private mariosService: MariosService) {
    this.form = this.formBuilder.group({
      selectedUser: ['', Validators.required],
      selectedCategory: ['', Validators.required],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      comment: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  ngOnInit(): void {
    this.userService.publicUsers
      .subscribe((data: PublicUser[]) => {
        this.users = data;
        this.users = this.userService.removeElementFromPublicUserListByUUID(this.users, this.userService.getCurrentUser);
      })
    this.categories = this.mariosService.categories;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      console.error('Form is not valid. Please fill all required fields properly.');
      return;
    }
    console.log(this.form.value);
    let payloadMarios: PayloadMarios = {
      senderId: this.userService.getCurrentUser,
      receiverId: this.form.value.selectedUser,
      type: this.form.value.selectedCategory,
      title: this.form.value.title,
      comment: this.form.value.comment
    }
    this.mariosService.addMarios(payloadMarios);
    this.form.reset();
  }
}
