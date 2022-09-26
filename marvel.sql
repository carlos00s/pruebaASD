-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-09-2022 a las 23:28:44
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `marvel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE `personajes` (
  `id` int(12) NOT NULL,
  `alias` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `inclinacion` varchar(50) DEFAULT NULL,
  `grupo` varchar(100) DEFAULT NULL,
  `lugarOperacion` varchar(100) DEFAULT NULL,
  `condicion` varchar(100) DEFAULT NULL,
  `tipoPoder` varchar(100) DEFAULT NULL,
  `vehiculo` int(11) DEFAULT NULL,
  `tipoVehiculo` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id`, `alias`, `nombre`, `inclinacion`, `grupo`, `lugarOperacion`, `condicion`, `tipoPoder`, `vehiculo`, `tipoVehiculo`, `imagen`) VALUES
(1, 'Iron man', 'Tony Stark', 'Heroe', 'Los vengadores', 'New york', 'Libre', 'Emanacion de Energia', 1, 'Armadura', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6aIC-ZVmezai9O1D9C4uFhTT__XmO8VYHA&usqp=CAU'),
(2, 'Capitan america', 'Steve Rogers', 'Heroe', 'Los vengadores', 'USA', 'Libre', 'Geneticamente modificado aumentando su fuerza', 1, 'Automovil', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJRzPFkxgTA8jUdVtP-4sF2zRThJFUez1FQ&usqp=CAU');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculo`
--

CREATE TABLE `vehiculo` (
  `id` int(11) NOT NULL,
  `tipo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vehiculo`
--

INSERT INTO `vehiculo` (`id`, `tipo`) VALUES
(1, 'Armadura'),
(2, 'Automovil');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personajes`
--
ALTER TABLE `personajes`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
