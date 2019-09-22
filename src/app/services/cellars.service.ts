import { Injectable } from '@angular/core';
import {EnvService} from './env.service';
import {Cellar} from '../models/cellar';

@Injectable({
  providedIn: 'root'
})
export class CellarsService {

  private USER_CELLARS_URL: string;

  constructor(
      private envService: EnvService,
  ) {
    this.USER_CELLARS_URL = envService.USERCELLARS_URL;
  }

  getAllCellarsOfOneUser(uuid: string): Array<Cellar> {
    return new Array<Cellar>();
  }
}
