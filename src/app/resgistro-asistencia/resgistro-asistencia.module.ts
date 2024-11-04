import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgistroAsistenciaPageRoutingModule } from './resgistro-asistencia-routing.module';

import { ResgistroAsistenciaPage } from './resgistro-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgistroAsistenciaPageRoutingModule
  ],
  declarations: [ResgistroAsistenciaPage]
})
export class ResgistroAsistenciaPageModule {}
