import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EnvService} from './env.service';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {Domain} from '../models/domain';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  public domainsList: Array<Domain>;

  constructor(
      private http: HttpClient,
      private env: EnvService,
      private auth: AuthService,
  ) { }

  getAllDomains(): Observable<Array<Domain>> {
    const bearer = 'Bearer ' + this.auth.token.token;
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
        Authorization: bearer,
      })
    };
    return this.http.get<Array<Domain>>(this.env.GETALLREGIONSURL, httpOptions);
  }
}
