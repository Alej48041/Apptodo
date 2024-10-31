To-Do List Project
Este es un proyecto de demostración de una aplicación To-Do List desarrollada utilizando Laravel para el backend y React para el frontend. Esta guía te ayudará a instalar, configurar y ejecutar la aplicación en un entorno local.
Requisitos Previos
Antes de comenzar, asegúrate de tener instalados los siguientes elementos:
•	PHP (≥ 8.0)
•	Composer (para gestionar las dependencias de Laravel)
•	Node.js y npm (para gestionar las dependencias del frontend con React)
•	MySQL (o cualquier otra base de datos que prefieras usar)
•	XAMPP u otra herramienta similar para gestionar un entorno de servidor local
Instalación
Clonar el Repositorio
Clona el repositorio a tu máquina local usando el siguiente comando:
git clone https://github.com/Alej48041/Apptodo.git
Configurar el Backend (Laravel)
1.	Ir al Directorio del Backend:
cd todolist/backend
2.	Instalar Dependencias:
Ejecuta el siguiente comando para instalar las dependencias de Laravel:
composer install
3.	Configurar el Archivo .env:
Copia el archivo de ejemplo de entorno y configúralo:
cp .env.example .env
Edita el archivo .env para configurar la conexión a la base de datos:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1      
DB_PORT=3306           
DB_DATABASE=todolist    
DB_USERNAME=root        
DB_PASSWORD=

4.	Generar la Clave de la Aplicación:
php artisan key:generate
5.	Migrar la Base de Datos:
php artisan migrate
6.	Iniciar el Servidor de Desarrollo:
php artisan serve
Esto iniciará el backend en http://127.0.0.1:8000.
Configurar el Frontend (React)
1.	Ir al Directorio del Frontend:
cd ../frontend
2.	Instalar Dependencias:
Ejecuta el siguiente comando para instalar las dependencias del proyecto React:
npm install
3.	Iniciar el Servidor de Desarrollo:
npm start
Esto iniciará la aplicación en http://localhost:3000.
Uso de la Aplicación
Crear Tareas
1.	Abre la aplicación en http://localhost:3000.
2.	Usa el formulario para crear una nueva tarea. Puedes ingresar el título de la tarea, elegir una categoría y marcar si está completada o no.
Administrar Categorías
1.	Puedes crear nuevas categorías para organizar mejor tus tareas.
2.	Al eliminar una categoría, todas las tareas asociadas también serán eliminadas.
Ver y Actualizar Tareas
1.	Todas las tareas se muestran en una lista.
2.	Puedes marcar una tarea como completada o pendiente directamente desde la lista.
3.	También puedes eliminar una tarea si ya no es necesaria.
Consideraciones para Desarrollo Local
Para evitar problemas de seguridad como errores de CSRF o CORS durante el desarrollo local, se han hecho las siguientes configuraciones:
•	La verificación CSRF se ha deshabilitado para las rutas de la API.
•	CORS se ha configurado para permitir todas las solicitudes desde cualquier origen.
Estas configuraciones solo deben mantenerse durante el desarrollo local y no se recomiendan para un entorno de producción.
Solución de Problemas
Error 419: CSRF Token Mismatch
Si encuentras este error, asegúrate de que las rutas de la API estén excluidas de la verificación CSRF en VerifyCsrfToken.php:
protected $except = [
    'api/*',
];
Error de Conexión a la Base de Datos
Verifica que las credenciales de la base de datos en el archivo .env sean correctas y que el servicio de MySQL esté ejecutándose.
Tecnologías Utilizadas
•	Laravel: Backend y API.
•	React: Frontend.
•	MySQL: Base de datos.

