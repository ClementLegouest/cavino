import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EnvService} from './env.service';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {WineType} from '../models/wine-type';
import {Region} from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(
      private http: HttpClient,
      private env: EnvService,
      private auth: AuthService,
  ) { }

  getAllRegions(): Observable<Array<Region>> {
    const bearer = 'Bearer ' + this.auth.token.token;
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
        Authorization: bearer,
      })
    };
    return this.http.get<Array<Region>>(this.env.GETALLREGIONSURL, httpOptions);
  }
}
