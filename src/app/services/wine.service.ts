import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WineType} from '../models/wine-type';
import {AuthService} from './auth.service';
import {EnvService} from './env.service';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(
      private http: HttpClient,
      private env: EnvService,
      private auth: AuthService,
  ) { }

  getAllWineTypes(): Observable<Array<WineType>> {
    const bearer = 'Bearer ' + this.auth.token.token;
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
        Authorization: bearer,
      })
    };
    return this.http.get<Array<WineType>>(this.env.GETALLWINETYPESURL, httpOptions);
  }
}
