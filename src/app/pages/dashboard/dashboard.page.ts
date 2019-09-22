import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import {Token} from '../../models/token';
import {EnvService} from '../../services/env.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    private token: Token;
    private user: User;

    constructor(
        private menu: MenuController,
        private authService: AuthService,
        private env: EnvService) {
        this.menu.enable(true);
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        console.log('On est la');
        this.getUserInfo();
    }

    getUserInfo() {
        this.token = this.env.token;
        console.log(this.token);
        this.authService.user(this.token.uuid, this.token.token)
            .subscribe((user) => {
                console.log(user);
                this.user = user;
                }
            );
    }

    disconnect() {
        this.authService.logout();
    }
}
