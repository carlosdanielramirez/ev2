import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-asignaturas',
  templateUrl: './mis-asignaturas.page.html',
  styleUrls: ['./mis-asignaturas.page.scss'],
})
export class MisAsignaturasPage implements OnInit {

  asignaturas = [
    {nombre: "Programacion", seccion1: "PGY4121"},
    {nombre: "Ingles", seccion2: "INI5111"},
    {nombre: "Calidad de Software", seccion3: "CSY4111"},
    {nombre: "Arquitectura", seccion4: "AS4131"},
    {nombre: "Estadistica Descriptiva", seccion5: "MAT4140"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
