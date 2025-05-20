package daw.dwes._6.servicio;

import java.util.List;

import daw.dwes._6.entity.Usuario;

public interface UsuarioServicio {

	public List<Usuario> getUsuarios();
	public Usuario getUsuario(int id);
	public Usuario aniadirUsuario(Usuario usuario);
	public Usuario modificarUsuario(int id, Usuario usuario);
	public boolean borrarUsuario(int id);
}
