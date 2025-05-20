import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-id',
  standalone: false,
  templateUrl: './usuario-id.component.html',
  styleUrl: './usuario-id.component.css'
})
export class UsuarioIDComponent implements OnInit{
   usuario!: Usuario;
  editando: boolean = false;
  usuarioEdit: Usuario = {} as Usuario;
  creandoNuevo = false;

  constructor(
    private servicioUsuario: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.servicioUsuario.getUsuario(id).subscribe(data => {
      this.usuario = data;
      this.usuarioEdit = { ...data }; // copia para editar
    });
  }

  activarEdicion() {
    this.editando = true;
  }

  cancelarEdicion() {
    this.editando = false;
    this.usuarioEdit = { ...this.usuario }; // descarta cambios
  }

  guardarCambios() {
    this.servicioUsuario.modificarUsuario(this.usuario.id!, this.usuarioEdit).subscribe(() => {
      this.usuario = { ...this.usuarioEdit };
      this.editando = false;
      alert('Usuario modificado');
    });
  }

  borrarUsuario() {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.servicioUsuario.borrarUsuario(this.usuario.id!).subscribe(() => {
        alert('Usuario eliminado');
        this.router.navigate(['/usuarios']);
      });
    }
  }
   
}
