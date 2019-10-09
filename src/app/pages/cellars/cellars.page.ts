import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {AuthService} from '../../services/auth.service';
import {CellarsService} from '../../services/cellars.service';
import {Cellar} from '../../models/cellar';
import {NgForm} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {NewCellarPage} from '../new-cellar/new-cellar.page';
import { CellarDetailPage } from './modal/cellar-detail/cellar-detail.page';
import { CellarEditPage } from './modal/cellar-edit/cellar-edit.page';
import { AlertService } from 'src/app/services/alert.service';

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
        private modal: ModalController,
        private alert: AlertService,
    ) {
        this.menuList = menu.appPages;
        this.cellarList = cellar.cellarList;
    }

    ngOnInit() { }

    async newCellar() {
        const loginModal = await this.modal.create({
            component: NewCellarPage,
        });
        return await loginModal.present();
    }

    async detailCellar(cellar: Cellar) {
        console.log(cellar);
        this.cellar.currentCellar = cellar;
        const detailModal = await this.modal.create({
            component: CellarDetailPage,
            componentProps: {
                'name': cellar.name,
                'width': cellar.width.toString(),
                'height': cellar.height.toString(),
                'id': cellar.id,
                'userUUID': cellar.userUUID
            }
        });
        return await detailModal.present();
    }

    async editCellar(cellar: Cellar) {
        const detailModal = await this.modal.create({
            component: CellarEditPage,
            componentProps: {
                'name': cellar.name,
                'width': cellar.width,
                'height': cellar.height,
                'id': cellar.id,
                'userUUID': cellar.userUUID
            }
        });
        return await detailModal.present();
    }

    deleteCellar(id: number) {
        this.cellar.deleteCellarByIdAndUuid(id)
            .subscribe((data) => {
                this.alert.presentToast("Le cellier a bien été supprimé.")
            }), (error) => {
                this.alert.presentToast("Le cellier n'a pas été supprimé.");
            };
    }

    disconnect() {
        this.auth.logout();
    }
}
