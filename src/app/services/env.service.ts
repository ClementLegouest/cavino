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
  private SIGNUP_URI = 'signup';
  private _SIGNUP_URL = this.API_URL + this.SIGNUP_URI;
  private USER_URI = 'user/';
  private _USER_URL = this._API_URL + this.USER_URI;
  private _USERCELLARS_URI = 'user/cellars/';
  private _USERCELLARS_URL = this._API_URL + this._USERCELLARS_URI;
  private ADDCELLARURI = 'cellar';
  private _ADDCELLARURL = this.API_URL + this.ADDCELLARURI;
  private DELETECELLARBYIDANDUUID_URI = '/cellar/{id}/{userUUID}';
  private _DELETECELLARBYIDANDUUID_URL = this.API_URL + this.DELETECELLARBYIDANDUUID_URI;
  private GETALLWINETYPESURI = 'wineType';
  private _GETALLWINETYPESURL = this.API_URL + this.GETALLWINETYPESURI;
  private GETALLREGIONSURI = 'region?offset=0&limit=20';
  private _GETALLREGIONSURL = this.API_URL + this.GETALLREGIONSURI;
  private GETALLCOUNTRIESURI = 'country?offset=0&limit=20';
  private _GETALLCOUNTRIESURL = this.API_URL + this.GETALLCOUNTRIESURI;
  private GETALLBOTTLESURI = 'bottle?offset=0&limit=20';
  private _GETALLBOTTLESURL = this.API_URL + this.GETALLBOTTLESURI;
  private GETALLPOSITIONINCELLARBYCELLARIDURI = 'positionInCellar/byCellarId/';
  private _GETALLPOSITIONINCELLARBYCELLARIDURL = this.API_URL + this.GETALLPOSITIONINCELLARBYCELLARIDURI;

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

  get GETALLWINETYPESURL(): string {
    return this._GETALLWINETYPESURL;
  }

  get GETALLREGIONSURL(): string {
    return this._GETALLREGIONSURL;
  }

  get GETALLCOUNTRIESURL(): string {
    return this._GETALLCOUNTRIESURL;
  }

  get GETALLBOTTLESURL(): string {
    return this._GETALLBOTTLESURL;
  }

  get GETALLPOSITIONINCELLARBYCELLARIDURL(): string {
    return this._GETALLPOSITIONINCELLARBYCELLARIDURL;
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
