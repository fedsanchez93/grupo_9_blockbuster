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

-- Volcando datos para la tabla blockbuster_db.genres: ~1 rows (aproximadamente)
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
  `image_url` varchar(100) NOT NULL DEFAULT '',
  `description` varchar(300) NOT NULL,
  `length` int(10) unsigned NOT NULL,
  `release_year` int(10) unsigned DEFAULT NULL,
  `price` decimal(5,2) unsigned NOT NULL DEFAULT 0.00,
  `trailer` int(11) DEFAULT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT 0,
  `movie_url` varchar(100) DEFAULT NULL,
  `blockbuster_rating` decimal(2,1) unsigned DEFAULT NULL,
  `imdb_rating` decimal(2,1) unsigned DEFAULT NULL,
  `rotten_tomatoes_rating` decimal(2,1) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.movies: ~1 rows (aproximadamente)
REPLACE INTO `movies` (`id`, `title`, `image_url`, `description`, `length`, `release_year`, `price`, `trailer`, `is_active`, `movie_url`, `blockbuster_rating`, `imdb_rating`, `rotten_tomatoes_rating`) VALUES
	(1, 'Titulo_test', '', 'Descripcion de prueba', 120, NULL, 0.00, NULL, 1, NULL, NULL, NULL, NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.movies_genres: ~0 rows (aproximadamente)
REPLACE INTO `movies_genres` (`id`, `id_movie`, `id_genre`) VALUES
	(1, 1, 1);

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
  `id` int(10) unsigned NOT NULL,
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
  `image_url` varchar(100) DEFAULT NULL,
  `is_admin` tinyint(4) NOT NULL DEFAULT 0,
  `id_favorite_genre` int(10) unsigned DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_favorite_genre` (`id_favorite_genre`),
  CONSTRAINT `id_favorite_genre_genre_fk` FOREIGN KEY (`id_favorite_genre`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla blockbuster_db.users: ~0 rows (aproximadamente)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
