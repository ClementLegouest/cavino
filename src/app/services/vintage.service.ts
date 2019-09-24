import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EnvService} from './env.service';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Vintage} from '../models/vintage';

@Injectable({
  providedIn: 'root'
})
export class VintageService {

  constructor(
      private http: HttpClient,
      private env: EnvService,
      private auth: AuthService,
  ) { }

  getAllVintages(): Observable<Array<Vintage>> {
    const bearer = 'Bearer ' + this.auth.token.token;
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
        Authorization: bearer,
      })
    };
    return this.http.get<Array<Vintage>>(this.env.GETALLREGIONSURL, httpOptions);
  }
}
