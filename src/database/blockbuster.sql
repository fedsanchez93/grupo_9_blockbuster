-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.27-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para blockbuster_db
CREATE DATABASE IF NOT EXISTS `blockbuster_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `blockbuster_db`;

-- Volcando estructura para tabla blockbuster_db.genres
CREATE TABLE IF NOT EXISTS `genres` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `genre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.genres: ~0 rows (aproximadamente)
REPLACE INTO `genres` (`id`, `genre`) VALUES
	(1, 'Acción');

-- Volcando estructura para tabla blockbuster_db.languages
CREATE TABLE IF NOT EXISTS `languages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `language` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.languages: ~0 rows (aproximadamente)

-- Volcando estructura para tabla blockbuster_db.movies
CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `image_url` varchar(200) NOT NULL DEFAULT '',
  `description` varchar(600) NOT NULL,
  `length` int(10) unsigned NOT NULL,
  `release_year` int(10) unsigned DEFAULT NULL,
  `price` decimal(8,2) unsigned NOT NULL DEFAULT 0.00,
  `trailer` varchar(200) DEFAULT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT 0,
  `movie_url` varchar(200) DEFAULT NULL,
  `blockbuster_rating` decimal(3,1) unsigned DEFAULT NULL,
  `imdb_rating` decimal(3,1) unsigned DEFAULT NULL,
  `rotten_tomatoes_rating` decimal(3,1) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.movies: ~4 rows (aproximadamente)
REPLACE INTO `movies` (`id`, `title`, `image_url`, `description`, `length`, `release_year`, `price`, `trailer`, `is_active`, `movie_url`, `blockbuster_rating`, `imdb_rating`, `rotten_tomatoes_rating`) VALUES
	(1, 'Titulo_test', '', 'Descripcion de prueba', 120, NULL, 0.00, NULL, 1, NULL, NULL, NULL, NULL),
	(2, 'Test pelicula 2', 'http://sarasaimagen', 'Esto es una descripcion de prueba', 150, 2023, 223.25, '10', 1, 'http://sarasamovie', 5.0, 3.0, 8.0),
	(3, 'Test pelicula 2', 'http://sarasaimagen', 'Esto es una descripcion de prueba', 150, 2023, 223.25, '10', 1, 'http://sarasamovie', 5.0, 3.0, 8.0),
	(4, 'Test pelicula 3', 'http://sarasaimagen', 'Esto es una descripcion de prueba', 150, 2023, 999.99, '10', 1, 'http://sarasamovie', 5.0, 3.0, 8.0);

-- Volcando estructura para tabla blockbuster_db.movies_genres
CREATE TABLE IF NOT EXISTS `movies_genres` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_movie` int(10) unsigned DEFAULT NULL,
  `id_genre` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_movie` (`id_movie`),
  KEY `id_genre` (`id_genre`),
  CONSTRAINT `genres_id_genre_fk` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id`),
  CONSTRAINT `genres_id_movie_fk` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.movies_genres: ~3 rows (aproximadamente)
REPLACE INTO `movies_genres` (`id`, `id_movie`, `id_genre`) VALUES
	(1, 1, 1),
	(2, 3, 1),
	(3, 4, 1);

-- Volcando estructura para tabla blockbuster_db.movies_languages
CREATE TABLE IF NOT EXISTS `movies_languages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_movie` int(10) unsigned DEFAULT NULL,
  `id_language` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_movie` (`id_movie`),
  KEY `id_user` (`id_language`) USING BTREE,
  CONSTRAINT `languages_id_language_fk` FOREIGN KEY (`id_language`) REFERENCES `languages` (`id`),
  CONSTRAINT `languages_id_movie_fk` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.movies_languages: ~0 rows (aproximadamente)

-- Volcando estructura para tabla blockbuster_db.movies_users_cart
CREATE TABLE IF NOT EXISTS `movies_users_cart` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` int(10) unsigned DEFAULT NULL,
  `id_movie` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_movie` (`id_movie`),
  CONSTRAINT `users_cart_id_movie_fk` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`),
  CONSTRAINT `users_cart_id_user_fk` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.movies_users_cart: ~0 rows (aproximadamente)

-- Volcando estructura para tabla blockbuster_db.movies_users_rentals
CREATE TABLE IF NOT EXISTS `movies_users_rentals` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_movie` int(10) unsigned DEFAULT NULL,
  `id_user` int(10) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `expired_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_movie` (`id_movie`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `users_rentals_id_movie_fk` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`),
  CONSTRAINT `users_rentals_id_user_fk` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.movies_users_rentals: ~0 rows (aproximadamente)

-- Volcando estructura para tabla blockbuster_db.movies_users_wishlist
CREATE TABLE IF NOT EXISTS `movies_users_wishlist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_movie` int(10) unsigned DEFAULT NULL,
  `id_user` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_movie` (`id_movie`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `users_wishlist_id_movie_fk` FOREIGN KEY (`id_movie`) REFERENCES `movies` (`id`),
  CONSTRAINT `users_wishlist_id_user_fk` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.movies_users_wishlist: ~0 rows (aproximadamente)

-- Volcando estructura para tabla blockbuster_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `image_url` varchar(200) DEFAULT NULL,
  `is_admin` tinyint(4) NOT NULL DEFAULT 0,
  `id_favorite_genre` int(10) unsigned DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_favorite_genre` (`id_favorite_genre`),
  CONSTRAINT `id_favorite_genre_genre_fk` FOREIGN KEY (`id_favorite_genre`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.users: ~9 rows (aproximadamente)
REPLACE INTO `users` (`id`, `name`, `username`, `email`, `password`, `image_url`, `is_admin`, `id_favorite_genre`, `is_active`) VALUES
	(1, 'Test test uno', 'test uno', 'test@test.com', '$2a$10$uFkSkWAT2pczqqa4ZuSB9uG748A9VqEls10kJl5DVx2WtPJcFYdjm', '/userFoto.jpeg', 0, 1, 1),
	(2, 'Test test 2', 'test2', 'test2@test.com', '$2a$10$TzdBzqXJOjPaKN9kT0eEEenvDic37k1gEIA.bv.XChSBdyDqAOPBS', '/userFoto.jpeg', 1, 1, 1),
	(3, 'Federico Sanchez', 'fedsanchez', 'feddrsanchez@gmail.com', '$2a$10$Wek894WKlaHSD6OjBp5GJ.1Yhp9URzlA6w/WP2VST2KxeOh0e9px6', '/userFoto.jpeg', 1, 1, 1),
	(4, 'admin', 'admin', 'admin@admin.com', '$2a$10$DWLQecg8/VsWmnqAZVij0.cUyzE8TZoVpkqOnPI7koUXpKle23B2O', '/userFoto.jpeg', 1, 1, 1),
	(5, 'Test test tres', 'test 3', 'test3@test.com', '$2a$10$IAkdWJqHxxN1gHkWpa77EOls.JCMcmfMeLamyxWTswG33ImyWaDEu', '/userFoto.jpeg', 0, 1, 1),
	(6, 'Sarasa', 'Sarasa', 'test3@test.com', '$2a$10$FWhsgXTFzEKATjFrq05HeOcWjI5P8P7LU9zOTqw711ADFzV8Sc.mS', '/userFoto.jpeg', 0, 1, 1),
	(7, 'Test', 'test', 'test3@test.com', '$2a$10$q57SPKppRi2jMi1Ll0./jOsEY0WVhTVSsjlzrNyIWi33JYUgp8vbK', '/userFoto.jpeg', 0, 1, 1),
	(8, 'test', 'test', 'test3@test.com', '$2a$10$a4GacZUAPINp1jZl.0C.3uQUR69jzV7enp5sX7EbQXWbdU2gvN2.C', '/userFoto.jpeg', 0, 1, 1),
	(9, 'test', 'test', 'test4@test.com', '$2a$10$S6WDrH.YdzrNliV8nj4xWuqooZsc6BiJlSpUSNiFwYNfNsXIZ39wC', '/userFoto.jpeg', 0, 1, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
