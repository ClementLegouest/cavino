import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EnvService} from './env.service';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Country} from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
      private http: HttpClient,
      private env: EnvService,
      private auth: AuthService,
  ) { }

  getAllVintages(): Observable<Array<Country>> {
    const bearer = 'Bearer ' + this.auth.token.token;
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
        Authorization: bearer,
      })
    };
    return this.http.get<Array<Country>>(this.env.GETALLREGIONSURL, httpOptions);
  }
}
