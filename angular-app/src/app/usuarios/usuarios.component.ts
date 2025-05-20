import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit{

  public listaUsuarios!: Usuario[];
  creandoNuevo: boolean = false;
  editando: boolean = false;
  usuarioEdit: Usuario = {} as Usuario;
  usuario!: Usuario;
  mostrarFormulario = false;
  usuarioSeleccionado: Usuario | null = null;

  constructor(
    private _servicioUsuario : UsuarioService,
    private router: Router
  ){}

  ngOnInit( ): void {
    this.devolverUsuarios();
  }

  devolverUsuarios() {
    this._servicioUsuario.getUsuarios().subscribe({
        next: result => {   
            this.listaUsuarios=result;
            console.log(result);

        },
        error: error => console.log(error)
    });

  }
  verUsuario(id: number): void {
    this._servicioUsuario.getUsuario(id).subscribe({
      next: usuario => {
        console.log('Usuario individual:', usuario);
        // Aquí puedes hacer lo que quieras, por ejemplo mostrar en modal o redirigir a otra vista
      },
      error: err => {
        console.error('Error al obtener el usuario', err);
      }
    });
  }
  crearNuevo() {
    this.usuarioSeleccionado = null;
    this.mostrarFormulario = true;
  }

  editarUsuario(usuario: Usuario) {
    this.usuarioSeleccionado = usuario;
    this.mostrarFormulario = true;
  }

  guardarUsuario(usuario: Usuario) {
    if (usuario.id && usuario.id > 0) {
      // editar usuario
      this._servicioUsuario.modificarUsuario(usuario.id, usuario).subscribe(() => {
        alert('Usuario modificado');
        this.mostrarFormulario = false;
        this.devolverUsuarios(); // refrescar lista
      });
    } else {
      // crear usuario
      this._servicioUsuario.crearUsuario(usuario).subscribe(() => {
        alert('Usuario creado');
        this.mostrarFormulario = false;
        this.devolverUsuarios();
      });
    }
  }
  cancelarEdicion() {
    this.mostrarFormulario = false;
  }
}
