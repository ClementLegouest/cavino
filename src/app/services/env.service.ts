import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Token} from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  private _API_URL = 'https://esgi-cavino-api.herokuapp.com/api/';
  private SIGNIN_URI = 'signin';
  private _SIGNIN_URL = this._API_URL + this.SIGNIN_URI;
  private USER_URI = 'user/';
  private _USER_URL = this._API_URL + this.USER_URI;

  private _token: Token;
  private user: User;

  constructor() { }

  get API_URL(): string {
    return this._API_URL;
  }

  get SIGNIN_URL(): string {
    return this._SIGNIN_URL;
  }

  get USER_URL(): string {
    return this._USER_URL;
  }

  get token(): Token {
    return this._token;
  }

  set token(value: Token) {
    this._token = value;
  }
}
