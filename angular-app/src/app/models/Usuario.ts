export class Usuario{
    
  id?: number;
  usuario: string;
  nombre: string;
  contrasenia: string;
  rol: 'administrador' | 'usuario';
  

  constructor(
    usuario: string,
    nombre: string,
    contrasenia: string,
    rol: 'administrador' | 'usuario',
    id? : number
  ) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.contrasenia = contrasenia;
    this.rol = rol;
    if (id !== undefined) {
      this.id = id;
    }
  }
  
}