CREATE DATABASE marvel;

USE marvel;

CREATE TABLE personajes(
    id INT(12) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    alias VARCHAR(100),
    nombre VARCHAR(100),
    inclinacion VARCHAR(50),
    grupo VARCHAR(100),
    lugarOperacion VARCHAR(100),
    condicion VARCHAR(100),
    tipoPoder VARCHAR(100),
    vehiculo BOOLEAN,
    tipoVehiculo TEXT,
    imagen VARCHAR(255)
);

DESCRIBE personajes;

CREATE TABLE vehiculo(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(100)
);