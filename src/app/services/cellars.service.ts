import { Injectable } from '@angular/core';
import {EnvService} from './env.service';
import {Cellar} from '../models/cellar';
import {Token} from '../models/token';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CellarsService {

    private USER_CELLARS_URL: string;
    private token: Token;

    constructor(
        private envService: EnvService,
        private authService: AuthService,
        private http: HttpClient
    ) {
        this.USER_CELLARS_URL = envService.USERCELLARS_URL;
        this.token = authService.token;
    }

    /** GET : Get all the cellars of one user by uuid */

    getAllCellarsOfOneUser(uuid: string): Observable<Array<Cellar>> {
        const bearer = this.authService.bearer;
        const httpOptions = this.authService.options;
        return this.http.get<Array<Cellar>>(this.USER_CELLARS_URL + uuid, httpOptions);
        // return new Array<Cellar>();
    }
}
