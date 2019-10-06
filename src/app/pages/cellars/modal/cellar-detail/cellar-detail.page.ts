import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CellarEditPage } from '../cellar-edit/cellar-edit.page';

@Component({
  selector: 'app-cellar-detail',
  templateUrl: './cellar-detail.page.html',
  styleUrls: ['./cellar-detail.page.scss'],
})
export class CellarDetailPage implements OnInit {

  @Input() name: string;
  @Input() width: number;
  @Input() height: number;
  @Input() id: string;
  @Input() userUUID: string;

  constructor(
    private modal: ModalController,
  ) { }

  ngOnInit() {
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
