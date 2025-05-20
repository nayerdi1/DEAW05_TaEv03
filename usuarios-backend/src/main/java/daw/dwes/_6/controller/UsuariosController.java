package daw.dwes._6.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import daw.dwes._6.entity.Usuario;
import daw.dwes._6.servicio.UsuarioServicio;

@RestController
@RequestMapping("/api")
//@CrossOrigin(origins = "http://127.0.0.7:5500")
public class UsuariosController {
	
	@Autowired
	private UsuarioServicio usuarioService;
	
	@GetMapping("getUsuarios")
	public List<Usuario> getUsuarios() {
		return usuarioService.getUsuarios();
	}
	
	@GetMapping("getUsuario/{id}")
	public Usuario getUsuario(@PathVariable int id) {
		return usuarioService.getUsuario(id);
	}
	@PostMapping("/create")
	public Usuario aniadirLibro(@RequestBody Usuario nuevoLibro){
		return usuarioService.aniadirUsuario(nuevoLibro);
	} 
	
	@PutMapping("/update/{id}")
	public Usuario modificarLibro( @PathVariable int id, @RequestBody Usuario usuario){
		return usuarioService.modificarUsuario(id, usuario);
	} 
	
	@DeleteMapping("/delete/{id}")
	public boolean borrarUsuario(@PathVariable int id){
	  
		return usuarioService.borrarUsuario(id);
	} 
}
