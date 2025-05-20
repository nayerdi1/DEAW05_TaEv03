package daw.dwes._6.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import daw.dwes._6.entity.Usuario;
import jakarta.persistence.EntityManager;

@Repository
public class UsuariosDAOImpl implements UsuariosDAO {

	@Autowired
	private EntityManager entityManager;
	

	@Override
	@Transactional
	public List<Usuario> getUsuarios() {
		// Obtener la sesión de Hibernate
		Session currentSession= entityManager.unwrap(Session.class);
		// Crear la consulta HQL
		Query<Usuario> consulta= currentSession.createQuery("from Usuario",Usuario.class);
		// Ejecutar la consulta y obtener los resultados
		List<Usuario> usuarios = consulta.getResultList();
		return usuarios;
		
	}

	@Override
	@Transactional
	public Usuario getUsuario(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		
        Usuario usuario = currentSession.get(Usuario.class, id);

        return usuario;
	}

	@Override
	@Transactional
	public Usuario aniadirUsuario(Usuario usuario) {
		Session currentSession = entityManager.unwrap(Session.class);

        currentSession.persist(usuario);
        return usuario;
	}

	@Override
	@Transactional
	public Usuario modificarUsuario(int id, Usuario usuario) {
		Session currentSession = entityManager.unwrap(Session.class);
		usuario.setId(id);
		currentSession.merge(usuario);
        return usuario;
	}

	@Override
	@Transactional
	public boolean borrarUsuario(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Usuario usuario = currentSession.get(Usuario.class, id);
		if (usuario != null) {
	        currentSession.remove(usuario);
	        return true;
	    }
		return false;
	}

}
