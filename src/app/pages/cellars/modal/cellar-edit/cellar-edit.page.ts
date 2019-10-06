import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cellar-edit',
  templateUrl: './cellar-edit.page.html',
  styleUrls: ['./cellar-edit.page.scss'],
})
export class CellarEditPage implements OnInit {

  constructor(
    private modal: ModalController,
  ) { }

  @Input() name: string;
  @Input() width: number;
  @Input() height: number;
  @Input() id: string;
  @Input() userUUID: string;

  ngOnInit() {
  }

  // Dismiss Edit Modal
  dismissDetail() {
    this.modal.dismiss();
  }

}
