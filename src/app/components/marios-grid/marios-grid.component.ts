import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MariosDialogComponent} from "../shared/marios-dialog/marios-dialog.component";
import {Marios} from "../../interfaces/marios";
import {UserService} from "../../services/user.service";
import {PublicUser, User} from "../../interfaces/user";
@Component({
  selector: 'app-marios-grid',
  templateUrl: './marios-grid.component.html',
  styleUrls: ['./marios-grid.component.css']
})
export class MariosGridComponent {
  @Input() marios: Marios[] = [];
  allUsers: PublicUser[] = [];

  constructor(public dialog: MatDialog, public userService: UserService) {
  }

  ngOnInit() {
    this.userService.publicUsers
      .subscribe((users: PublicUser[]) => {
        this.allUsers = users;
      })
  }

  openDialog(index: number) {
    this.dialog.open(MariosDialogComponent, {
      data: {
        marios: this.marios[index],
        user: this.findUserNameByUuid(this.marios[index].senderId),
      }
    });
  }

  findUserNameByUuid(uuid: string): string {
    if (this.allUsers.find(user => user.uuid === uuid)!.userName) {
      return this.allUsers.find(user => user.uuid === uuid)!.userName;
    } else {
      return uuid;
    }
  }

  truncateComment(comment: string): string {
    if (comment.length > 100) {
      return comment.substring(0, 90) + "...";
    } else {
      return comment;
    }
  }

  checkIfSenderIsMe(senderId: string, uuid: string): boolean {
    return senderId === uuid;
  }
}
