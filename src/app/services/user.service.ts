import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PublicUser, User} from "../interfaces/user";
import {BehaviorSubject, Observable} from "rxjs";
import {Marios} from "../interfaces/marios";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string = 'api/user/';
  private usersData: PublicUser[] = [];
  private publicUsers$ = new BehaviorSubject<PublicUser[]>([]);

  constructor(private http: HttpClient) {
  }

  get users() {
    if (this.usersData.length === 0) {
      this.fetchUsers();
    }
    return this.publicUsers$.asObservable();
  }

  private fetchUsers() {
    return this.http.get<PublicUser[]>(this.usersUrl + `all`).subscribe(data => {
      this.usersData = data;
      console.log(this.usersData);
      this.publicUsers$.next(data);
    });
  }

  getUserByUuid(uuid: string): Observable<User> {
    return this.http.get<User>(this.usersUrl + uuid);
  }

  getAllMariosByUuid(uuid: string): Observable<Marios[]> {
    return this.http.get<Marios[]>(this.usersUrl + uuid + '/marios');
  }

  getReceivedMariosByUuid(uuid: string): Observable<Marios[]> {
    return this.http.get<Marios[]>(this.usersUrl + uuid + '/received');
  }
  getSentMariosByUuid(uuid: string): Observable<Marios[]> {
    return this.http.get<Marios[]>(this.usersUrl + uuid + '/given');
  }

}
