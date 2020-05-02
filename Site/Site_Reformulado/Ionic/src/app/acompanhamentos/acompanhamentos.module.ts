import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcompanhamentosPage } from './acompanhamentos.page';

const routes: Routes = [
  {
    path: '',
    component: AcompanhamentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcompanhamentosPage]
})
export class AcompanhamentosPageModule {}
