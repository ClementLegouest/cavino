import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CellarsPage } from './cellars.page';
import {NewCellarPage} from '../new-cellar/new-cellar.page';
import { CellarDetailPage } from './modal/cellar-detail/cellar-detail.page';
import { CellarEditPage } from './modal/cellar-edit/cellar-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CellarsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CellarsPage, NewCellarPage, CellarDetailPage, CellarEditPage],
  entryComponents: [NewCellarPage, CellarDetailPage, CellarEditPage]
})
export class CellarsPageModule {}
