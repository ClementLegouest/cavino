import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CellarEditPage } from '../cellar-edit/cellar-edit.page';
import { PositionInCellar } from 'src/app/models/position-in-cellar';
import { CellarsService } from 'src/app/services/cellars.service';
import { AlertService } from 'src/app/services/alert.service';
import { Cellar } from 'src/app/models/cellar';

@Component({
  selector: 'app-cellar-detail',
  templateUrl: './cellar-detail.page.html',
  styleUrls: ['./cellar-detail.page.scss'],
})
export class CellarDetailPage implements OnInit {

  @Input() name: string;
  @Input() width: number;
  @Input() height: number;
  @Input() id: number;
  @Input() userUUID: string;
  private positionsList: Array<PositionInCellar>;
  private cellar: Cellar;

  constructor(
    private modal: ModalController,
    private cellars: CellarsService,
    private alert: AlertService,
  ) {
    this.getPositions();
  }

  ngOnInit() {
  }

  getPositions() {
    this.cellars.getAllPositionsInCellarByCellarId(Number(this.id))
    .subscribe((positionsList) => {
      this.positionsList = positionsList;
      console.log(positionsList);
    }),(error) => {
      console.log(error.status + ' ' + error.statusText);
      this.alert.presentToast(error.status + ' ' + error.statusText);
    };
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
