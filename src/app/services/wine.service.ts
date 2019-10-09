import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WineType} from '../models/wine-type';
import {AuthService} from './auth.service';
import {EnvService} from './env.service';
import { FavouriteWine } from '../models/favourite-wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  public winetypesList: Array<WineType>;
  public favWinesList: Array<FavouriteWine>;

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

  getFavouriteWines(): Observable<Array<FavouriteWine>> {
    const bearer = 'Bearer ' + this.auth.token.token;
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
        Authorization: bearer,
      })
    };
    return this.http.get<Array<FavouriteWine>>(this.env.GETFAVOURITEWINESURL + this.auth.token.uuid, httpOptions);
  }
}
