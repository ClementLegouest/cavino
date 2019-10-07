import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from './env.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Bottle } from '../models/bottle';

@Injectable({
  providedIn: 'root'
})
export class BottleService {

  public bottlesList: Array<Bottle>

  constructor(
    private http: HttpClient,
    private env: EnvService,
    private auth: AuthService,
  ) { }

  getAllBottles(): Observable<Array<Bottle>> {
    const bearer = 'Bearer ' + this.auth.token.token;
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
        Authorization: bearer,
      })
    };
    return this.http.get<Array<Bottle>>(this.env.GETALLBOTTLESURL, httpOptions);
  }
}
