import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

export class AuthService {

    private options = { headers: new HttpHeaders({accept: 'application/json', 'Content-Type': 'application/json'})};
    isLoggedIn = false;
    private _token: Token;

  constructor(
      private http: HttpClient,
      private storage: NativeStorage,
      private env: EnvService,
      private router: Router
  ) { }

    get token(): Token {
        return this._token;
    }

    /** POST : Connect to the application */

    public login(email: string, password: string): Observable<Token> {
        return this.http.post<Token>(this.env.SIGNIN_URL, {email, password}, this.options);
    }

  register(fName: string, lName: string, email: string, password: string) {
    return this.http.post(this.env.API_URL + 'auth/register',
        {fName, lName, email, password}
    );
  }

  logout() {
        this.storage.remove('token');
        this.storage.clear();
        this.isLoggedIn = false;
        this.router.navigateByUrl('/');
  }

  user(uuid: string, token: string): Observable<User> {
      const bearer = 'Bearer ' + token;
      const httpOptions = {
          headers: new HttpHeaders({
              accept: 'application/json',
              Authorization: bearer,
          })
      };
      return this.http.get<User>(this.env.USER_URL + uuid, httpOptions);
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
