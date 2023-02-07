-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: blockbuster_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Acción'),(2,'Ciencia Ficción'),(3,'Terror'),(4,'Amor'),(5,'Comedia'),(6,'Policial'),(7,'Aventura'),(8,'Bélico'),(9,'Drama'),(10,'Suspenso'),(11,'Misterio'),(12,'Fantasía'),(13,'Infantil'),(14,'Familiar'),(15,'Biografía'),(16,'Animación'),(17,'Romance'),(18,'Crimen'),(19,'Documental');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,'Español'),(2,'Inglés'),(3,'Portugués'),(4,'Francés'),(5,'Italiano');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (5,'2012','/images/2012.jpg','Un escritor frustrado lucha por mantener a su familia con vida cuando una serie de catástrofes mundiales amenaza con aniquilar a la humanidad.',158,2009,1000.00,'https://www.youtube.com/embed/9ooDeS4Ep5Q',0,NULL,9.0,8.0,9.5),(6,'1917','/images/197.jpg','Dos jóvenes soldados ingleses tienen una misión imposible durante la Primera Guerra Mundial: entregar un mensaje tras las líneas enemigas para evitar que sus compañeros caigan en una trampa.',119,2019,1000.00,'https://www.youtube.com/embed/YrbdN5zaouU',0,NULL,9.0,8.0,9.5),(7,'El Guason','/images/El Guason.jpg','En Gotham, Arthur Fleck, un comediante con problemas de salud mental, es marginado y maltratado por la sociedad. Se adentra en una espiral de crimen que resulta revolucionaria. Pronto conoce a su alter-ego, el Joker.',122,2019,1000.00,'https://www.youtube.com/embed/TobNCFMK_bs',0,NULL,9.0,8.0,9.5),(8,'Los Vengadores: End Game','/images/LosVengadores.jpg','Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la Agencia SHIELD, decide reclutar a un equipo para salvar al mundo de un desastre casi seguro. Adaptación del cómic de Marvel \'Los Vengadores\', el legendario grupo de superhéroes formado por Ironman, Hulk, Thor y el Capitán América entre otros.',181,2019,1000.00,'https://www.youtube.com/embed/HQIiYqOVTWo',0,NULL,9.0,8.0,9.5),(9,'Smile','/images/smile.jpg','descripcion',115,2022,1000.00,'https://www.youtube.com/embed/yhKiQGJop_8',0,NULL,9.0,8.0,9.5),(10,'Maquinas Mortales','/images/MaquinasMortales.jpg','Una misteriosa joven llamada Hester Shaw une sus fuerzas a las de Anna Fang, una peligrosa forajida con una recompensa en mente, y Tom Natsworthy, un paria de Londres, para liderar la lucha contra una gigante ciudad depredadora sobre ruedas.',128,2018,1000.00,'https://www.youtube.com/embed/zDABDg7vwsk',0,NULL,9.0,8.0,9.5),(11,'Tonto y Retonto','/images/Tonto_y_retonto.jpg','Después de que una mujer deje un maletín en la terminal del aeropuerto, un tonto conductor de limusina y su amigo todavía más tonto emprenden un viaje por carretera a través del país hasta Aspen para devolverlo.',107,1994,1000.00,'https://www.youtube.com/embed/Yl5LO5ATfNM',0,NULL,8.0,7.3,8.0),(12,'Mas barato por docena','/images/mas_barato_por_docena.jpg','Un padre debe adaptarse a su nuevo trabajo y cuidar de su inmensa e inestable progenie mientras su mujer va de gira con su libro.',98,2003,1000.00,'https://www.youtube.com/embed/jw2mjK5tdcM',0,NULL,7.0,6.9,7.0),(13,'La Roca','/images/La_roca.jpg','Un químico y un exconvicto deben liderar el contraataque cuando un grupo de militares renegados amenaza con un ataque con gas nervioso desde Alcatraz contra San Francisco.',136,1996,1000.00,'https://www.youtube.com/embed/pxQ0ThcH7tE',0,NULL,7.5,7.4,8.0),(14,'En Busca de la felicidad','/images/en_busca_de_la_felicidad.jpg','Un vendedor en apuros se queda con la custodia de su hijo cuando está a punto de comenzar una carrera profesional que le cambiará la vida.',117,2006,1000.00,'https://www.youtube.com/embed/2McKB-uOE5E',0,NULL,8.5,8.0,9.0),(15,'Harry Potter y el cáliz de fuego','/images/Harry_Potter_Caliz_De_fuego.jpg','Harry Potter se encuentra compitiendo en un peligroso torneo entre escuelas de magia rivales, pero está distraído por pesadillas recurrentes.',157,2005,1000.00,'https://www.youtube.com/embed/2C_2wAY4PkE',0,NULL,8.0,7.7,8.1),(16,'Fuego contra fuego','/images/Fuego_contra_fuego.jpg','Un grupo de ladrones profesionales de alto nivel empieza a sentir a la policía de Los Ángeles en los talones cuando, sin saberlo, deja una pista en su último atraco.',170,1995,1000.00,'https://www.youtube.com/embed/2GfZl4kuVNI',0,NULL,9.0,8.3,8.5),(17,'El rey león','/images/El_rey_leon.jpg','El pequeño león Simba, príncipe heredero, es engañado por su malvado tío, quien desea el trono para sí mismo.',88,1994,1000.00,'https://www.youtube.com/embed/G5fgUzyaGqk?start=6',0,NULL,9.0,8.5,9.2),(18,'Toy Story 2','/images/Toy_Story_2.jpg','Cuando Woody es secuestrado por un coleccionista de juguetes, Buzz y sus amigos emprenden una misión de rescate, pero Woody encuentra tentadora la idea de ser inmortalizado en un museo.',92,1999,1000.00,'https://www.youtube.com/embed/0RRvNHZG0kM',0,NULL,8.3,7.9,8.0),(19,'Forrest Gump','/images/Forrest_Gump.jpg','Las presidencias de Kennedy y Johnson, los acontecimientos de Vietnam, el Watergate y otros eventos históricos se desarrollan a través de la perspectiva de un hombre de Alabama con un coeficiente intelectual de 75.',144,1994,1000.00,'https://www.youtube.com/embed/GIs2gpWpBiQ',0,NULL,9.2,8.8,9.5),(20,'Avatar 2','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-l3jtPAaGsozTebI2DeTJHSIrxT2DNKLeaQ&usqp=CAU','El camino del agua',192,2022,3333.00,'https://www.youtube.com/embed/3t580rdDCWg',1,'https://www.youtube.com/embed/LDXYRzerjzU',5.0,7.8,8.0);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movies_genres`
--

LOCK TABLES `movies_genres` WRITE;
/*!40000 ALTER TABLE `movies_genres` DISABLE KEYS */;
/*!40000 ALTER TABLE `movies_genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movies_languages`
--

LOCK TABLES `movies_languages` WRITE;
/*!40000 ALTER TABLE `movies_languages` DISABLE KEYS */;
INSERT INTO `movies_languages` VALUES (2,20,2);
/*!40000 ALTER TABLE `movies_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movies_users_cart`
--

LOCK TABLES `movies_users_cart` WRITE;
/*!40000 ALTER TABLE `movies_users_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `movies_users_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movies_users_rentals`
--

LOCK TABLES `movies_users_rentals` WRITE;
/*!40000 ALTER TABLE `movies_users_rentals` DISABLE KEYS */;
INSERT INTO `movies_users_rentals` VALUES (1,6,4,'2023-02-05 21:24:26','2023-02-03 19:23:08');
/*!40000 ALTER TABLE `movies_users_rentals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `movies_users_wishlist`
--

LOCK TABLES `movies_users_wishlist` WRITE;
/*!40000 ALTER TABLE `movies_users_wishlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `movies_users_wishlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Test test uno','test uno','test@test.com','$2a$10$uFkSkWAT2pczqqa4ZuSB9uG748A9VqEls10kJl5DVx2WtPJcFYdjm','/userFoto.jpeg',0,1,1),(2,'Test test 2','test2','test2@test.com','$2a$10$TzdBzqXJOjPaKN9kT0eEEenvDic37k1gEIA.bv.XChSBdyDqAOPBS','/userFoto.jpeg',1,1,1),(3,'Federico Sanchez','fedsanchez','feddrsanchez@gmail.com','$2a$10$Wek894WKlaHSD6OjBp5GJ.1Yhp9URzlA6w/WP2VST2KxeOh0e9px6','/userFoto.jpeg',1,1,1),(4,'admin','admin','admin@admin.com','$2a$10$DWLQecg8/VsWmnqAZVij0.cUyzE8TZoVpkqOnPI7koUXpKle23B2O','/userFoto.jpeg',1,1,1),(5,'Test test tres','test 3','test3@test.com','$2a$10$IAkdWJqHxxN1gHkWpa77EOls.JCMcmfMeLamyxWTswG33ImyWaDEu','/userFoto.jpeg',0,1,1),(6,'Sarasa','Sarasa','test3@test.com','$2a$10$FWhsgXTFzEKATjFrq05HeOcWjI5P8P7LU9zOTqw711ADFzV8Sc.mS','/userFoto.jpeg',0,1,1),(7,'Test','test','test3@test.com','$2a$10$q57SPKppRi2jMi1Ll0./jOsEY0WVhTVSsjlzrNyIWi33JYUgp8vbK','/userFoto.jpeg',0,1,1),(8,'test','test','test3@test.com','$2a$10$a4GacZUAPINp1jZl.0C.3uQUR69jzV7enp5sX7EbQXWbdU2gvN2.C','/userFoto.jpeg',0,1,1),(9,'test','test','test4@test.com','$2a$10$S6WDrH.YdzrNliV8nj4xWuqooZsc6BiJlSpUSNiFwYNfNsXIZ39wC','/userFoto.jpeg',0,1,1),(10,'david','david','moshechami@gmail.com','$2a$10$w4EvuT8koqqgt1upPwo2B.0dwahYQobOnzKHvH1Ir5YNjj3o0Nqe6','1675631798318_img_.jpg',1,NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'blockbuster_db'
--

--
-- Dumping routines for database 'blockbuster_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-06 21:44:06
