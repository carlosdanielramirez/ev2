import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-qrdocente',
  templateUrl: './qrdocente.page.html',
  styleUrls: ['./qrdocente.page.scss'],
})
export class QrdocentePage {

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
