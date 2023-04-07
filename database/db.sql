create database tareasdb;

CREATE TABLE IF NOT EXISTS tareas (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  descripcion VARCHAR(300),
  hecho boolean NOT NULL DEFAULT 0,
  createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tareas ( titulo, descripcion )
  VALUES
	('Tarea 1', 'Mi primer tarea' );