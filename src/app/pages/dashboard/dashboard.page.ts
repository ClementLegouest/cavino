import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import {Token} from '../../models/token';
import {EnvService} from '../../services/env.service';
import {NativeStorage} from '@ionic-native/native-storage/ngx';

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
        private storage: NativeStorage) {
        this.menu.enable(true);
        this.menuList = env.appPagesNew;
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        console.log('On est la');
        this.getUserInfo();
    }

    getUserInfo() {
        if ( this.env.isMobile() ) {
            this.storage.getItem('token')
                .then((token) => {
                    this.token = token;
                    console.log('token out of NativeStorage : ', this.token);
                });
        } else {
            this.token = JSON.parse(localStorage.getItem('token'));
            console.log('token out of localStorage : ', this.token);
        }
        console.log('token from EnService : ', this.token);
        this.authService.user(this.token.uuid, this.token.token)
            .subscribe((user) => {
                this.user = user;
                if ( this.env.isMobile() ) {
                    this.storage.setItem('user', user);
                    console.log('user from NativeStorage : ', this.storage.getItem('user'));
                } else {
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log('user out of localStorage : ', JSON.parse(localStorage.getItem('user')));
                }
                this.env.user = user;
                console.log('user from EnvService : ', this.env.user);
            });
    }

    disconnect() {
        this.authService.logout();
    }
}
