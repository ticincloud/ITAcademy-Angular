-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versió del servidor:          10.4.17-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versió:              11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for my_app
CREATE DATABASE IF NOT EXISTS `my_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `my_app`;

-- Dumping structure for table my_app.restaurants
CREATE TABLE IF NOT EXISTS `restaurants` (
  `id_restaurant` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `lat` varchar(25) NOT NULL,
  `lng` varchar(25) NOT NULL,
  `kind_food` set('Cuina catalana','Cuina de marcat','Cuina mediterrània','Vegetarià','Pitzzeria','Cuina de temporada','Pastisseria','Hamburgeseria','Braseria') NOT NULL,
  `photo` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_restaurant`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table my_app.restaurants: ~12 rows (approximately)
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` (`id_restaurant`, `name`, `address`, `lat`, `lng`, `kind_food`, `photo`) VALUES
	(1, 'Restaurant Sant Jaume', 'Riera de Sant Pere, 147, 08338 Premià de Dalt, Barcelona', '41.50698164925351', '2.344107916522237', 'Cuina mediterrània', 'sj.jpg'),
	(2, 'La Piazza de Dalt', 'Plaça de la fabrica, 2, 08338 Premià de Dalt, Barcelona', '41.50548117964308', '2.345883781408598', 'Pitzzeria', 'piazza.jpg'),
	(3, 'El Celleret', 'Passatge Cooperativa, 26, 08338 Premià de Dalt, Barcelona', '41.50677048033955', '2.3449672798562653', 'Cuina mediterrània', 'celleret.jpg'),
	(4, 'Arrels', 'Carretera a Premià de Mar, 141, 08338 Premià de Dalt, Barcelona', '41.506826176417995', '2.3426510092541895', 'Cuina de temporada', 'arrels.jpg'),
	(5, 'Restaurant Catalans', '08338 Premià de Dalt, Barcelona (camí montanya)', '41.51824662460521', '2.336712931469591', 'Cuina catalana', 'catalans.jpg'),
	(6, 'Restaurant la Cisa', 'Carrer de la Cisa, 136, 08338 Premià de Dalt, Barcelona', '41.510916945116556', '2.351193768222792', 'Cuina mediterrània', 'cisa.jpg'),
	(7, 'Restaurant El balcó de Premià de Dalt', 'Torrent Mateu Mas, 31, 08338 Premià de Dalt, Barcelona', '41.50463263451825', '2.348221967693039', 'Cuina mediterrània', 'balco.jpg'),
	(8, 'PamSucre', 'Travessia Sant Josep, 1, 08338 Premià de Dalt, Barcelona', '41.50604346364453', '2.3457180064587053', 'Pastisseria', 'sucre.jpg'),
	(9, 'La fàbrica', 'Plaça de la Fàbrica, 2, Local 7, 08338 Premià de Dalt, Barcelona', '41.50548298111628', '2.3456179642179764', 'Hamburgeseria', 'fabrica.jpg'),
	(10, 'Restaurant Can Martí', 'Masia Can Martí, s/n, 08338 Premià de Dalt, Barcelona', '41.49859421514084', '2.349570065671368', 'Braseria', 'marti.jpg'),
	(11, 'Restaurant Sant Antoni', 'Carrer Penedès, 43, 08338 Premià de Dalt, Barcelona', '41.50000353835926', '2.3579736093016535', 'Cuina catalana', 'antoni.jpg'),
	(12, 'El Rebost', 'Camí del Mig, 128, 08330 Premià de Mar, Barcelona', '41.49847842730786', '2.3593094795996397', 'Cuina mediterrània', 'rebost.jpg');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
