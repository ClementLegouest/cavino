import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {AuthService} from '../../services/auth.service';
import {EnvService} from '../../services/env.service';
import {CellarsService} from '../../services/cellars.service';

@Component({
  selector: 'app-cellars',
  templateUrl: './cellars.page.html',
  styleUrls: ['./cellars.page.scss'],
})
export class CellarsPage implements OnInit {

  private menuList;

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
    const uuid = this.authService.token.uuid;
    this.cellarService.getAllCellarsOfOneUser(uuid)
        .subscribe((cellars) => {
          console.log('data');
        });
  }

  disconnect() {
    this.authService.logout();
  }
}
