package daw.dwes._6.entity;

import org.hibernate.annotations.DynamicUpdate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@DynamicUpdate
@Table(name="usuarios")
public class Usuario {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "usuario", nullable = false)
	private String usuario;
	 
	@Column(name = "nombre", nullable = false)
	private String nombre;
	 
	@Column(name = "contrasenia", nullable = false)
	private String contrasenia;
	 
	@Column(name = "rol", nullable = false)
	private String rol;
	
	@Column(name = "sesion_iniciada", nullable = false)
	private boolean sesion_iniciada;
	 
	public Usuario(String usuario, String nombre, String contrasenia, String rol) {
		this.usuario = usuario;
		this.nombre = nombre;
		this.contrasenia = contrasenia;
		this.rol = rol;
		this.sesion_iniciada = true;
	}
	public Usuario() {
		    // Constructor por defecto necesario para JPA
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getContrasenia() {
		return contrasenia;
	}
	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}
	public String getRol() {
		return rol;
	}
	public void setRol(String rol) {
		this.rol = rol;
	}
	public boolean isSesion_iniciada() {
		return sesion_iniciada;
	}
	public void setSesion_iniciada(boolean sesion_iniciada) {
		this.sesion_iniciada = sesion_iniciada;
	}

}
