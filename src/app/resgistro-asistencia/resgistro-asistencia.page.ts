import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resgistro-asistencia',
  templateUrl: './resgistro-asistencia.page.html',
  styleUrls: ['./resgistro-asistencia.page.scss'],
})
export class ResgistroAsistenciaPage{

  segment = 'scan';
  asign = [
    { nombre: "Programacion", qrText: 'Alumno Presente en Programacion' },
    { nombre: "Ingles", qrText: 'Alumno Presente en Ingles' },
    { nombre: "Calidad de Software", qrText: 'Alumno Presente en Calidad de Software' },
    { nombre: "Arquitectura", qrText: 'Alumno Presente en Arquitectura' },
    { nombre: "Estadistica Descriptiva", qrText: 'Alumno Presente en Estadistica Descriptiva' }
  ];

  constructor() { }


}
