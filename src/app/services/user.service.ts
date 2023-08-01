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

  private USER: string = "d339b931-f7dd-4a55-ac20-abfdff1d948b";
  public allMarios: Marios[] = [];
  public receivedMarios: Marios[] = [];
  public sentMarios: Marios[] = [];
  private allMarios$ = new BehaviorSubject<Marios[]>(this.allMarios);
  private receivedMarios$ = new BehaviorSubject<Marios[]>(this.receivedMarios);
  private sentMarios$ = new BehaviorSubject<Marios[]>(this.sentMarios);

  constructor(private http: HttpClient) {
  }

  get AllMarios(): Observable<Marios[]> {
    if(this.allMarios.length === 0) {
      this.fetchAllMarios();
    }
    return this.allMarios$.asObservable();
  }

  fetchAllMarios() {
    return this.getAllMariosByUuid(this.USER).subscribe((data) => {
      this.allMarios = data;
      this.allMarios$.next(data);
    });
  }

  get ReceivedMarios(): Observable<Marios[]> {
    if(this.receivedMarios.length === 0) {
      this.fetchReceivedMarios();
    }
    return this.receivedMarios$.asObservable();
  }

  fetchReceivedMarios() {
    return this.getReceivedMariosByUuid(this.USER).subscribe((data) => {
      this.receivedMarios = data;
      this.receivedMarios$.next(data);
    });
  }

  get SentMarios(): Observable<Marios[]> {
    if(this.sentMarios.length === 0) {
      this.fetchSentMarios();
    }
    return this.sentMarios$.asObservable();
  }

  fetchSentMarios() {
    return this.getSentMariosByUuid(this.USER).subscribe((data) => {
      this.sentMarios = data;
      this.sentMarios$.next(data);
    });
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
