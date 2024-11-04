import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgistroAsistenciaPageRoutingModule } from './resgistro-asistencia-routing.module';

import { ResgistroAsistenciaPage } from './resgistro-asistencia.page';
import { QrCodeModule } from 'ng-qrcode';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgistroAsistenciaPageRoutingModule,
    QrCodeModule
  ],
  declarations: [ResgistroAsistenciaPage]
})
export class ResgistroAsistenciaPageModule {}
