import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
interface Usuario {
  id: string;
  username: string;
  password: string;
  role: string;
}
export interface UsuarioActual {
  id: string;
  username: string;
  role: string;
}


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }
//para iniciar sesion
  verificarCredenciales(username: string, password: string) {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`).pipe(
      map(usuarios => {
        const usuarioEncontrado = usuarios.find(u =>

          u.username === username &&
          u.password === password
        );
        if (usuarioEncontrado) {
          // Guardar datos del usuario en localStorage
          this.guardarDatosUsuario(usuarioEncontrado);
        }

        return usuarioEncontrado;
      })
    );
  }

  // metodos basicos para localStorage
  async guardar(id: string, valor: []) {
    localStorage.setItem(id, JSON.stringify(valor));
  }

  async leer(id:string)
  {
    let temp =  localStorage.getItem(id);
    if(temp != null)
      return JSON.parse(temp);
    return null;
  }
  async listar()
  {
    let listado : any = [];
    for(let i=0; i < localStorage.length; i++)
    {
      listado[i] = JSON.parse(""+localStorage.getItem("" + localStorage.key(i)));
    }
    return listado;
  }
  private guardarDatosUsuario(usuario: Usuario) {
    const datosParaGuardar: UsuarioActual = {
      id: usuario.id,
      username: usuario.username,
      role: usuario.role
    };
    localStorage.setItem('usuario_actual', JSON.stringify(datosParaGuardar));
  }

  // todo lo que tenga que ver con el cambio de contraseña

  verificarContraseña(username: string, password: string): Observable<Usuario | undefined> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`).pipe(
      map(usuarios => usuarios.find(u =>
        u.username === username &&
        u.password === password
      ))
    );
  }

  actualizarContraseña(userId: string, nuevaContraseña: string): Observable<Usuario> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`).pipe(
      switchMap(usuarios => {
        const usuario = usuarios.find(u => u.id === userId);
        if (!usuario) {
          throw new Error('Usuario no encontrado');
        }
        const usuarioActualizado = {
          ...usuario,
          password: nuevaContraseña
        };
        return this.http.put<Usuario>(
          `${this.apiUrl}/usuarios/${userId}`,
          usuarioActualizado
        );
      })
    );
  }

  obtenerUsuarioActual(): UsuarioActual | null {
    const temp = localStorage.getItem('usuario_actual');
    return temp ? JSON.parse(temp) : null;
  }
  haySesionActiva(): boolean {
    return localStorage.getItem('usuario_actual') !== null;
  }
}
