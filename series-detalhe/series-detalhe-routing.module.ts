import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesDetalhePage } from './series-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: SeriesDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesDetalhePageRoutingModule {}
