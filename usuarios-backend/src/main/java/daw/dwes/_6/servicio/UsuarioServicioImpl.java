package daw.dwes._6.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import daw.dwes._6.dao.UsuariosDAO;
import daw.dwes._6.entity.Usuario;

@Service
public class UsuarioServicioImpl implements UsuarioServicio {
	
	@Autowired
	private UsuariosDAO usuarioDAO;

	@Override
	public List<Usuario> getUsuarios() {
		// TODO Auto-generated method stub
		return usuarioDAO.getUsuarios();
	}

	@Override
	public Usuario getUsuario(int id) {
		// TODO Auto-generated method stub
		return usuarioDAO.getUsuario(id);
	}

	@Override
	public Usuario aniadirUsuario(Usuario usuario) {
		// TODO Auto-generated method stub
		return usuarioDAO.aniadirUsuario(usuario);
	}

	@Override
	public Usuario modificarUsuario(int id, Usuario usuario) {
		// TODO Auto-generated method stub
		return usuarioDAO.modificarUsuario(id, usuario);
	}

	@Override
	public boolean borrarUsuario(int id) {
		// TODO Auto-generated method stub
		return usuarioDAO.borrarUsuario(id);
	}

}
