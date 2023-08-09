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

  private currentUser: string = "2080d86d-6225-4243-a1a2-db4949ebbf40";
  public allMarios: Marios[] = [];
  public receivedMarios: Marios[] = [];
  public sentMarios: Marios[] = [];
  private allMarios$ = new BehaviorSubject<Marios[]>(this.allMarios);
  private receivedMarios$ = new BehaviorSubject<Marios[]>(this.receivedMarios);
  private sentMarios$ = new BehaviorSubject<Marios[]>(this.sentMarios);
  private _currentUser$ = new BehaviorSubject<string>(this.currentUser);

  constructor(private http: HttpClient) {
  }

  get getCurrentUser() {
    return this.currentUser;
  }


  get AllMarios(): Observable<Marios[]> {
    if (this.allMarios.length === 0) {
      this.fetchAllMarios();
    }
    return this.allMarios$.asObservable();
  }

  fetchAllMarios() {
    return this.getAllMariosByUuid(this.currentUser).subscribe((data) => {
      this.allMarios = data;
      this.allMarios.reverse();
      this.allMarios$.next(data);
    });
  }

  get ReceivedMarios(): Observable<Marios[]> {
    if (this.receivedMarios.length === 0) {
      this.fetchReceivedMarios();
    }
    return this.receivedMarios$.asObservable();
  }

  fetchReceivedMarios() {
    return this.getReceivedMariosByUuid(this.currentUser).subscribe((data) => {
      this.receivedMarios = data;
      this.receivedMarios.reverse();
      this.receivedMarios$.next(data);
    });
  }

  get SentMarios(): Observable<Marios[]> {
    if (this.sentMarios.length === 0) {
      this.fetchSentMarios();
    }
    return this.sentMarios$.asObservable();
  }

  fetchSentMarios() {
    return this.getSentMariosByUuid(this.currentUser).subscribe((data) => {
      this.sentMarios = data;
      this.sentMarios.reverse();
      this.sentMarios$.next(data);
    });
  }


  get publicUsers() {
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

  removeElementFromPublicUserListByUUID(arr: PublicUser[], uuidToRemove: string): PublicUser[] {
    return arr.filter((user) => user.uuid !== uuidToRemove);
  }


}
