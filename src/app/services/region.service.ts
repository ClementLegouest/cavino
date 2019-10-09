import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from './env.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Region } from '../models/region';
import { FavouriteRegion } from '../models/favourite-region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  public regionsList: Array<Region>;
  public favRegionsList: Array<FavouriteRegion>;

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

  getFavouriteRegions(): Observable<Array<FavouriteRegion>> {
    const bearer = 'Bearer ' + this.auth.token.token;
    const httpOptions = {
      headers: new HttpHeaders({
        accept: 'application/json',
        Authorization: bearer,
      })
    };
    return this.http.get<Array<FavouriteRegion>>(this.env.GETFAVOURITEREGIONSURL + this.auth.token.uuid, httpOptions);
  }
}
