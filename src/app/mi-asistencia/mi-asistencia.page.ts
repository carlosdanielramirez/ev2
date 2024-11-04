import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-asistencia',
  templateUrl: './mi-asistencia.page.html',
  styleUrls: ['./mi-asistencia.page.scss'],
})
export class MiAsistenciaPage implements OnInit {
    asistencias1 = [
      {fecha: "Miercoles 04 de septiembre", asistencia: "Presente"},
      {fecha: "Jueves 05 de septiembre", asistencia: "Presente"},
      {fecha: "Miercoles 11 de septiembre", asistencia: "Ausente"},
    ]
    asistencias2 = [
      {fecha: "Jueves 05 de septiembre", asistencia: "Presente"},
      {fecha: "Viernes 06 de septiembre ", asistencia: "Ausente"},
      {fecha: "Martes 10 de septiembre", asistencia: "Presente"},
    ]
    asistencias3 = [
      {fecha: "Miercoles 04 de septiembre", asistencia: "Presente"},
      {fecha: "Martes 10 de septiembre", asistencia: "Presente"},
      {fecha: "Miercoles 11 de septiembre", asistencia: "Presente"},
    ]
    asistencias4 = [
      {fecha: "Lunes 02 de septiembre", asistencia: "Presente"},
      {fecha: "Viernes 06 de septiembre", asistencia: "Presente"},
      {fecha: "Lunes 09 de septiembre", asistencia: "Presente"},
    ]
    asistencias5 = [
      {fecha: "Lunes 02 de septiembre", asistencia: "Ausente"},
      {fecha: "Miercoles 04 de septiembre", asistencia: "Presente"},
      {fecha: "Lunes 09 de septiembre", asistencia: "Presente"},
    ]
  constructor() { }

  ngOnInit() {
  }

}
