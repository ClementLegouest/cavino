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
import { WineService } from 'src/app/services/wine.service';
import { DomainService } from 'src/app/services/domain.service';
import { VintageService } from 'src/app/services/vintage.service';

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
        private wine: WineService,
        private domain: DomainService,
        private vintage: VintageService,
        private bottle: BottleService
        ) {
        region.getAllRegions()
        .subscribe((regions) => {
            region.regionsList = regions;
        });
        wine.getAllWineTypes()
        .subscribe((wines) => {
            wine.winetypesList = wines;
        });
        domain.getAllDomains()
        .subscribe((domains) => {
            domain.domainsList = domains;
        });
        vintage.getAllVintages()
        .subscribe((vintages) => {
            vintage.vintagesList = vintages;
        });
        country.getAllCountries()
        .subscribe((countries) => {
            country.countryList = countries;
        });
        bottle.getAllBottles()
        .subscribe((bottles) => {
            bottle.bottlesList = bottles;
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
