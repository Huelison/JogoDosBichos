import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PgPerguntaPage } from './pg-pergunta.page'; 

const routes: Routes = [
  {
    path: '',
    component: PgPerguntaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PgPerguntaPage] 
})
export class PgPerguntaPageModule {}
