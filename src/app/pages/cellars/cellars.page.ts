import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {AuthService} from '../../services/auth.service';
import {CellarsService} from '../../services/cellars.service';
import {Cellar} from '../../models/cellar';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {NewCellarPage} from '../new-cellar/new-cellar.page';

@Component({
    selector: 'app-cellars',
    templateUrl: './cellars.page.html',
    styleUrls: ['./cellars.page.scss'],
})

export class CellarsPage implements OnInit {

    private menuList;
    private cellarList: Array<Cellar>;

    constructor(
        private menu: MenuService,
        private auth: AuthService,
        private cellar: CellarsService,
        private modalCtrl: ModalController,
    ) {
        this.menuList = menu.appPages;
        this.cellarList = cellar.cellarList;
    }

    ngOnInit() { }

    createCellar(cellarForm: NgForm) {
        this.cellar.createCellarForUuid(
            cellarForm.value.name,
            cellarForm.value.width,
            cellarForm.value.height)
            .subscribe((cellar) => {
                console.log(cellar);
            });
    }

    deleteCellar(id: number) {
        this.cellar.deleteCellarByIdAndUuid(id, this.auth.token.uuid, this.auth.token.token)
            .subscribe((data) => {
                console.log(data);
            });
    }

    disconnect() {
        this.auth.logout();
    }

    async newCellar() {
        const loginModal = await this.modalCtrl.create({
            component: NewCellarPage,
        });
        return await loginModal.present();
    }
}
