import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import {Token} from '../models/token';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit {

    private options = { headers: new HttpHeaders({accept: 'application/json', 'Content-Type': 'application/json'})};
    isLoggedIn = false;
    private _token: Token;
    private _user: User;

  constructor(
      private http: HttpClient,
      private storage: NativeStorage,
      private env: EnvService,
      private router: Router
  ) {}

    async ngOnInit() {
        if (this.env.isMobile()) {
            this.token = JSON.parse(await this.storage.getItem('token'));
        } else {
            this.token = JSON.parse(localStorage.getItem('token'));
        }
    }

    get token(): Token {
        return this._token;
    }

    set token(value: Token) {
        this._token = value;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    /** POST : Connect to the application */

    public login(email: string, password: string): Observable<Token> {
        return this.http.post<Token>(this.env.SIGNIN_URL, {email, password}, this.options);
    }

    register(fName: string, lName: string, email: string, password: string): Observable<Token> {
        const httpOptions = {
            headers: new HttpHeaders({
                accept: 'application/json'
            })
        };
        return this.http.post<Token>(this.env.SIGNUP_URL, {
            "firstname": fName,
            "lastname": lName,
            "email": email,
            "password": password,
            "age": 0,
            "address": "On est la",
            "isSeller": false,
            "isAdmin": false
        }, httpOptions);
    }

  logout() {
        this.storage.remove('token');
        this.storage.clear();
        this.isLoggedIn = false;
        this.router.navigateByUrl('/');
  }

  /** GET : Get user infos */

  getUserInfo(): Observable<User> {
      const bearer = 'Bearer ' + this.token.token;
      const httpOptions = {
          headers: new HttpHeaders({
              accept: 'application/json',
              Authorization: bearer,
          })
      };
      return this.http.get<User>(this.env.USER_URL + this.token.uuid, httpOptions);
  }

  getToken() {
    return this.storage.getItem('token').then(
        data => {
          this._token = data;

          if (this._token != null) {
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }
        },
        error => {
          this._token = null;
          this.isLoggedIn = false;
        }
    );
  }
}
