import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {EnvService} from '../../services/env.service';
import {AuthService} from '../../services/auth.service';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private user: User;
  private menuList;

  constructor(
      private authService: AuthService,
      private env: EnvService,
      private menuService: MenuService,
      private storage: NativeStorage
  ) {
    this.menuList = menuService.appPages;
    console.log(this.menuList);
  }

  async ngOnInit() {
    this.user = this.authService.user;
    console.log('user from AuthService on profile page : ' + this.user);
  }

  disconnect() {
    this.authService.logout();
  }
}
