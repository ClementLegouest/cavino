import { Injectable } from '@angular/core';
import {EnvService} from './env.service';
import {Cellar} from '../models/cellar';
import {Token} from '../models/token';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import { PositionInCellar } from '../models/position-in-cellar';

@Injectable({
    providedIn: 'root'
})
export class CellarsService {

    private USER_CELLARS_URL: string;
    private token: Token;
    public cellarList: Array<Cellar>;

    constructor(
        private env: EnvService,
        private auth: AuthService,
        private http: HttpClient
    ) {
        this.USER_CELLARS_URL = env.USERCELLARS_URL;
        this.token = auth.token;
    }

    /** GET : Get all the cellars of one user by uuid */
    getAllCellarsOfOneUser(): Observable<Array<Cellar>> {
        const bearer = 'Bearer ' + this.auth.token.token;
        const httpOptions = {
            headers: new HttpHeaders({
                accept: 'application/json',
                Authorization: bearer,
            })
        };
        return this.http.get<Array<Cellar>>(this.USER_CELLARS_URL + this.auth.token.uuid, httpOptions);
    }

    /** POST : Add one cellar to one user by uuid */
    // TODO : HTTP POST CALL
    createCellarForUuid(nameValue: string, widthValue: number, heightValue: number): Observable<Cellar> {
        const bearer = 'Bearer ' + this.auth.token.token;
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
            userUUID: this.auth.user.uuid
        };
        console.log(postData);
        return this.http.post<Cellar>(this.env.ADDCELLARURL, postData, httpOptions);
    }

    /** DELETE : Delete one cellar by id and uuid */
    // TODO : HTTP DELETE CALL
    deleteCellarByIdAndUuid(id: number) {
        const bearer = 'Bearer ' + this.auth.token.token;
        const httpOptions = {
            headers: new HttpHeaders({
                accept: 'application/json',
                Authorization: bearer,
            })
        };
        return this.http.delete(this.env.DELETECELLARBYIDANDUUID_URL + '/' + id + '/' + this.auth.token.uuid, httpOptions);
    }

    getAllPositionsInCellarByCellarId(id: number) {
        const bearer = 'Bearer ' + this.auth.token.token;
        const httpOptions = {
            headers: new HttpHeaders({
                accept: 'application/json',
                Authorization: bearer,
            })
        };
        return this.http.get<Array<PositionInCellar>>(this.env.GETALLPOSITIONINCELLARBYCELLARIDURL + '/' + id, httpOptions)
    }
}
