import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  dismissDetail() {
    this.modal.dismiss();
  }

}
