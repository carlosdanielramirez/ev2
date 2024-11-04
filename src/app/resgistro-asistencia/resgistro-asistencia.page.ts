import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resgistro-asistencia',
  templateUrl: './resgistro-asistencia.page.html',
  styleUrls: ['./resgistro-asistencia.page.scss'],
})
export class ResgistroAsistenciaPage{

  mostrarQR: boolean = false;

  constructor() { }


  registrarAsistencia() {
    this.mostrarQR = true;
  }
}