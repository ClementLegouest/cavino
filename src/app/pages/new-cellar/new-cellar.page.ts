import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CellarsService} from '../../services/cellars.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-new-cellar',
  templateUrl: './new-cellar.page.html',
  styleUrls: ['./new-cellar.page.scss'],
})
export class NewCellarPage implements OnInit {

  constructor(
      private cellarService: CellarsService,
      private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  // Dismiss New Cellar Modal
  dismissNewCellar() {
    this.modalCtrl.dismiss();
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

}
