import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CellarsService } from '../../services/cellars.service';
import { ModalController, AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-new-cellar',
  templateUrl: './new-cellar.page.html',
  styleUrls: ['./new-cellar.page.scss'],
})
export class NewCellarPage implements OnInit {

  constructor(
      private cellarService: CellarsService,
      private modalCtrl: ModalController,
      private alert: AlertService,
  ) { }

  ngOnInit() {
  }

  // Dismiss New Cellar Modal
  dismissNewCellar() {
    this.modalCtrl.dismiss();
  }

  createCellar(cellarForm: NgForm) {
    if (cellarForm.value.name === '' || cellarForm.value.width === '' || cellarForm.value.height === '') {
      this.alert.presentToast('Renseignez tous les champs');
    } else {
      this.cellarService.createCellarForUuid(cellarForm.value.name, Number(cellarForm.value.width), Number(cellarForm.value.height))
          .subscribe((cellar) => {
            this.alert.presentToast("Cellier " + cellar.name + " créé.");
          },
          (error) => {
            this.alert.presentToast("Une erreur s'est produitre, Le cellier n'a pas été créé.");
          });
    }
  }
}
