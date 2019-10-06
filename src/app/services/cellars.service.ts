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
    public cellarList: Array<Cellar>;

    constructor(
        private envService: EnvService,
        private authService: AuthService,
        private http: HttpClient
    ) {
        this.USER_CELLARS_URL = envService.USERCELLARS_URL;
        this.token = authService.token;
    }

    /** GET : Get all the cellars of one user by uuid */

    getAllCellarsOfOneUser(uuid: string, token: string): Observable<Array<Cellar>> {
        const bearer = 'Bearer ' + token;
        const httpOptions = {
            headers: new HttpHeaders({
                accept: 'application/json',
                Authorization: bearer,
            })
        };
        return this.http.get<Array<Cellar>>(this.USER_CELLARS_URL + uuid, httpOptions);
    }

    /** POST : Add one cellar to one user by uuid */
    // TODO : HTTP POST CALL
    createCellarForUuid(nameValue: string, widthValue: number, heightValue: number): Observable<Cellar> {
        const bearer = 'Bearer ' + this.authService.token.token;
        const httpOptions = {
            headers: new HttpHeaders({
                accept: 'application/json',
                Authorization: bearer,
                'Content-Type': 'applicatrion/json'
            })
        };
        const postData = {
            name: nameValue,
            width: widthValue,
            height: heightValue,
            userUUID: this.authService.user.uuid
        };
        console.log(postData);
        return this.http.post<Cellar>(this.envService.ADDCELLARURL, postData, httpOptions);
    }

    /** DELETE : Delete one cellar by id and uuid */
    // TODO : HTTP DELETE CALL
    deleteCellarByIdAndUuid(id: number, uuid: string, token: string) {
        const bearer = 'Bearer ' + token;
        const httpOptions = {
            headers: new HttpHeaders({
                accept: 'application/json',
                Authorization: bearer,
            })
        };
        return this.http.delete(this.envService.DELETECELLARBYIDANDUUID_URL, httpOptions);
    }
}
