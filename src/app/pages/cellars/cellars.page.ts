import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {AuthService} from '../../services/auth.service';
import {CellarsService} from '../../services/cellars.service';
import {Cellar} from '../../models/cellar';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {NewCellarPage} from '../new-cellar/new-cellar.page';
import {LoginPage} from '../auth/login/login.page';

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
        private cellarService: CellarsService,
        private modalCtrl: ModalController,
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

    createCellar(cellarForm: NgForm) {
        console.log(cellarForm);
        this.cellarService.createCellarForUuid(
            cellarForm.value.name,
            cellarForm.value.width,
            cellarForm.value.height)
            .subscribe((cellar) => {
                console.log(cellar);
            });
    }

    deleteCellar(id: number) {
        this.cellarService.deleteCellarByIdAndUuid(id, this.authService.token.uuid, this.authService.token.token)
            .subscribe((data) => {
                console.log(data);
            });
        this.getUserCellars();
    }

    disconnect() {
        this.authService.logout();
    }

    async newCellar() {
        const loginModal = await this.modalCtrl.create({
            component: NewCellarPage,
        });
        return await loginModal.present();
    }
}
