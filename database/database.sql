CREATE DATABASE tienda;

CREATE TABLE cliente(
    id SERIAL PRIMARY KEY,
    cedula VARCHAR(10),
    nombre VARCHAR(40),
    apellido VARCHAR(40)

);

INSERT INTO cliente(cedula,nombre,apellido) VALUES ('0927020495','Sergio','Diaz')