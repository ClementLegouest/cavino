import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Token} from '../models/token';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  private _API_URL = 'https://esgi-cavino-api.herokuapp.com/api/';
  private SIGNIN_URI = 'signin';
  private _SIGNIN_URL = this._API_URL + this.SIGNIN_URI;
  private SIGNUP_URI = '';
  private _SIGNUP_URL = this.API_URL + this.SIGNUP_URI;
  private USER_URI = 'user/';
  private _USER_URL = this._API_URL + this.USER_URI;
  private _USERCELLARS_URI = 'user/cellars/';
  private _USERCELLARS_URL = this._API_URL + this._USERCELLARS_URI;
  private ADDCELLARURI = 'cellar';
  private _ADDCELLARURL = this.API_URL + this.ADDCELLARURI;
  private DELETECELLARBYIDANDUUID_URI = '/cellar/{id}/{userUUID}';
  private _DELETECELLARBYIDANDUUID_URL = this.API_URL + this.DELETECELLARBYIDANDUUID_URI;

  private _token: Token;
  private _user: User;

  constructor(
      private platrform: Platform
  ) { }

  isMobile(): boolean {
    if ('mobile' in this.platrform.platforms()) {
      return true;
    }
  }

  get API_URL(): string {
    return this._API_URL;
  }

  get SIGNIN_URL(): string {
    return this._SIGNIN_URL;
  }

  get SIGNUP_URL(): string {
    return this._SIGNUP_URL;
  }

  get USER_URL(): string {
    return this._USER_URL;
  }

  get USERCELLARS_URL(): string {
    return this._USERCELLARS_URL;
  }

  get ADDCELLARURL(): string {
    return this._ADDCELLARURL;
  }

  get DELETECELLARBYIDANDUUID_URL(): string {
    return this._DELETECELLARBYIDANDUUID_URL;
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
}
