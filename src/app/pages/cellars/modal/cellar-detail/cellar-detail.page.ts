import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AngularDelegate } from '@ionic/angular';
import { CellarEditPage } from '../cellar-edit/cellar-edit.page';
import { PositionInCellar } from 'src/app/models/position-in-cellar';
import { CellarsService } from 'src/app/services/cellars.service';
import { AlertService } from 'src/app/services/alert.service';
import { Cellar } from 'src/app/models/cellar';
import { Bottle } from 'src/app/models/bottle';
import { BottleService } from 'src/app/services/bottle.service';
import { debug } from 'util';

@Component({
  selector: 'app-cellar-detail',
  templateUrl: './cellar-detail.page.html',
  styleUrls: ['./cellar-detail.page.scss'],
})
export class CellarDetailPage implements OnInit {

  @Input() name: string;
  @Input() width: string;
  @Input() height: string;
  @Input() id: number;
  @Input() userUUID: string;
  private positionsList: Array<PositionInCellar>;
  private cellar: Cellar;
  private bottlesInCellar: Array<Bottle> = new Array<Bottle>();

  constructor(
    private modal: ModalController,
    private cellars: CellarsService,
    private alert: AlertService,
    private bottle: BottleService,
  ) {
    this.getPositions();
  }

  ngOnInit() {
  }

  getPositions() {
    this.cellars.getAllPositionsInCellarByCellarId(Number(this.cellars.currentCellar.id))
    .subscribe((positionsList) => {
      this.positionsList = positionsList;
      positionsList.forEach(position => {
        this.bottle.getOneBottleById(position.bottleId)
        .subscribe((bottle) => {
          this.bottlesInCellar.push(bottle);
        });
      });
    });
    ;
  }

  // Dismiss Detail Modal
  dismissDetail() {
    this.modal.dismiss();
  }

  // On Edit button tap, dismiss Detail modal and open Edit modal
  async editModal() {
    this.dismissDetail();
    const editModal = await this.modal.create({
        component: CellarEditPage
    });
    return await editModal.present();
  }
}
