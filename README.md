# grupo_9_blockbuster
## Proyecto integrador de Digital House

### ¿De que se trata?

Nuestro proyecto denominado Blockbuster busca revivir la vieja franquicia de videoclubes dedicada al alquiler de peliculas. Nuestro sitio esta basado en el mecanismo On Demand, donde el usuario puede adquirir a traves de su tarjeta de credito el derecho a ver una pelicula o serie de su preferencia en el momento que lo desee.

Buscamos darle una impronta estetica actual a una empresa que no pudo competir con las plataformas de streaming ya vigentes en la actualidad, y que hoy estaría destinada al publico consumidor de contenido cinematografico en general.

### En que nos referenciamos:

- En el carrito de YouTube, por la forma de mostrar en el costado izquierdo una imagen representativa de la pelicula/serie a adquirir.
- En paginas como Netflix, Paramount+ y HBO Max para la estetica y distribucion de los elementos del sitio.

### WireFrame del proyecto en Figma
https://www.figma.com/file/HYI7WKGyxuvuJsVl9TA7ac/proyecto?node-id=0%3A1

### Tablero de trabajo Trello
https://trello.com/b/tncZd58N/grupo9blockbuster

### DER Diagrama de la Data Base
https://lucid.app/lucidchart/a1f77ae1-3364-4698-bb5f-185c48ee607c/edit?invitationId=inv_585f5222-3057-4079-ba8a-b746f9ad510b

Integrantes del equipo:
======================
- Mi nombre es Laura Belén Córdoba
  - Tengo 24 años y soy de Gran Buenos Aires. Actualmente trabajo en Bender, en el sector administrativo de venta online. Algunos de mis hobbies más presentes son: correr, tocar la guitarra y hacer diseños gráficos.
- Me llamo Federico Sanchez
  - Tengo 28 años, soy estudiante de ingenieria en sistemas y me dedico a hacer consultoría IT. Mis hobbies son la pintura, tocar la guitarra y escuchar musica.
- Mi nombre es Nicolás Benedetti
  - Tengo 31 años y soy ingeniero mecánico. Trabajo como ingeniero de diseño de equipos mecánicos en Techint. Disfruto de la música, el deporte y pasar tiempo con mi familia.
- David Moshe Chami 23 años
  - Soy estudiante de programación, música y canto. Trabajo en ventas para un comercio familiar de telas para decoración y mantelería. Me gusta andar en bici, entrenar, escuchar música y participar en eventos. Considero que la responsabilidad y la buena onda son pilares para el éxito en cualquier desafío.


***
## Instalación del proyecto

### Desde la terminal:

- Clonar el proyecto:
````
git clone https://github.com/fedsanchez93/grupo_9_blockbuster.git
````


- Para instalar las dependencias correr: 
````
npm install
````

- Tambien Ingresar a la carpeta del dashboard en React e instalar dependencias: 
````
cd dashboard
npm install
````
***

## Instalación de la base de datos:

**Debe tener instalado un gestor de base de datos, por ejemplo: MYSQL Workbench
https://www.mysql.com/products/workbench/
o Heidi db https://www.heidisql.com/.**


### Desde la terminal de MySql:
**Debe estar posicionado en la carpeta raiz**
- Para Crear y Poblar las tablas con los datos, Desde su gestor de base de datos, correr el script que se encuentra en:
`
 src/database/blockbuster.sql
 `
- Una vez creadas las tablas, Configurar el archivo config.js ubicado en: 
`
/src/database/config/config.js
`


- Levantar el servidor para la base de datos desde su gestor de base de datos.

### Levantar el servidor puerto 5000: 
````
npm start
````
- ingresar a: http://localhost:5000/

***
### Levantar el dashboard en el puerto 3000: 
````
cd dashoard
npm start
````
***
