import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import {Token} from '../../models/token';
import {EnvService} from '../../services/env.service';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {MenuService} from '../../services/menu.service';
import { CellarsService } from 'src/app/services/cellars.service';
import { CountryService } from 'src/app/services/country.service';
import { RegionService } from 'src/app/services/region.service';
import { Region } from 'src/app/models/region';
import { BottleService } from 'src/app/services/bottle.service';

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
        private storage: NativeStorage,
        private cellar: CellarsService,
        private country: CountryService,
        private region: RegionService,
        private bottle: BottleService
        ) {
        country.getAllCountries()
        .subscribe((countries) => {
            country.countryList = countries;
            console.log(country.countryList);
        });
        region.getAllRegions()
        .subscribe((regions) => {
            region.regionsList = regions;
            console.log(region.regionsList);
        });
        bottle.getAllBottles()
        .subscribe((bottles) => {
            bottle.bottlesList = bottles;
            console.log(bottle.bottlesList);
        });
        this.menu.enable(false);
        this.menuList = menuService.appPages;
        this.getUserCellars();
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.getUserInfo();
    }

    getUserInfo() {
        this.authService.getUserInfo()
            .subscribe((user) => {
                this.authService.user = user;
            });
    }

    getUserCellars() {
        this.cellar.getAllCellarsOfOneUser()
            .subscribe((cellars) => {
                this.cellar.cellarList = cellars;
            });
      }

    disconnect() {
        this.authService.logout();
    }
}
