import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/getUsuarios`, {});
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/getUsuario/${id}`, {});
  }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    // No enviamos id, porque la BD lo genera
    const { id, ...usuarioSinId } = usuario;
    return this.http.post<Usuario>(`${this.apiUrl}/create`, usuarioSinId);
  }

  modificarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/update/${id}`, usuario);
  }

  borrarUsuario(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/delete/${id}`);
  }
}
