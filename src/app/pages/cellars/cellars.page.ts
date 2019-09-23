import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {AuthService} from '../../services/auth.service';
import {EnvService} from '../../services/env.service';
import {CellarsService} from '../../services/cellars.service';
import {Cellar} from '../../models/cellar';

@Component({
  selector: 'app-cellars',
  templateUrl: './cellars.page.html',
  styleUrls: ['./cellars.page.scss'],
})
export class CellarsPage implements OnInit {

  private menuList;
  private cellarList: Array<Cellar>;

  constructor(
      private menuService: MenuService,
      private authService: AuthService,
      private cellarService: CellarsService
  ) {
    this.menuList = menuService.appPages;
  }

  ngOnInit() {
    this.getUserCellars();
  }

  getUserCellars() {
    this.cellarService.getAllCellarsOfOneUser(this.authService.token.uuid, this.authService.token.token)
        .subscribe((cellars) => {
          console.log(cellars);
          this.cellarList = cellars;
        });
  }

  disconnect() {
    this.authService.logout();
  }
}
