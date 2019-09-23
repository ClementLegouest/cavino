import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import {Token} from '../../models/token';
import {EnvService} from '../../services/env.service';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {MenuService} from '../../services/menu.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    private token: Token;
    private user: User;
    private menuList;

    constructor(
        private menu: MenuController,
        private authService: AuthService,
        private env: EnvService,
        private menuService: MenuService,
        private storage: NativeStorage) {
        if ( env.isMobile() ) {
            this.menu.enable(true);
        } else {
            this.menu.enable(false);
        }
        this.menuList = menuService.appPages;
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        console.log('On est la');
        this.getUserInfo();
    }

    getUserInfo() {
        this.authService.getUserInfo(this.authService.token.uuid, this.authService.token.token)
            .subscribe((user) => {
                this.authService.user = user;
                console.log('user from AuthService : ', this.authService.user);
            });
    }

    disconnect() {
        this.authService.logout();
    }
}
