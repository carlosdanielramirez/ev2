import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgistroAsistenciaPage } from './resgistro-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ResgistroAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgistroAsistenciaPageRoutingModule {}
