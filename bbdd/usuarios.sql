DROP DATABASE IF EXISTS usuarios;
CREATE DATABASE if not exists usuarios;
use usuarios;

-- Crear la tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,
    rol ENUM('administrador', 'usuario') NOT NULL
);

-- Insertar los registros en la tabla usuarios
INSERT INTO usuarios (nombre, usuario, contrasenia, rol) VALUES
('Nora', 'nayerdi', SHA2('1234', 256), 'administrador'),
('Iker', 'iarana', SHA2('4321', 256), 'usuario'),
('Amaia', 'aetxeberria', SHA2('2468', 256), 'usuario'),
('Jon', 'jarretxe', SHA2('1357', 256), 'usuario'),
('June', 'jurrutia', SHA2('5678', 256), 'usuario'),
('Mikel', 'mgarcia', SHA2('8765', 256), 'usuario'),
('Malen', 'molasagasti', SHA2('1358', 256), 'usuario');
