import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-usuario-form',
  standalone: false,
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent {
  @Input() usuario: Usuario | null = null;  // Recibe usuario para editar o null para crear
  @Output() guardar = new EventEmitter<Usuario>();
  @Output() cancelar = new EventEmitter<void>();

  usuarioEdit: Usuario = {
    id: 0,
    nombre: '',
    usuario: '',
    contrasenia: '',
    rol: 'usuario'
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['usuario']) {
      // Si recibimos un usuario para editar, hacemos copia para edición
      if (this.usuario) {
        this.usuarioEdit = { ...this.usuario };
      } else {
        // Si es null, limpiamos para nuevo usuario
        this.usuarioEdit = {
          id: 0,
          nombre: '',
          usuario: '',
          contrasenia: '',
          rol: 'usuario'
        };
      }
    }
  }

  onSubmit() {
    this.guardar.emit(this.usuarioEdit);
  }

  onCancelar() {
    this.cancelar.emit();
  }
}
