import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriesDetalhePageRoutingModule } from './series-detalhe-routing.module';

import { SeriesDetalhePage } from './series-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriesDetalhePageRoutingModule
  ],
  declarations: [SeriesDetalhePage]
})
export class SeriesDetalhePageModule {}
