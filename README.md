# To-Do List Application

## Descripción del Proyecto
Este proyecto es una aplicación simple de **To-Do List** desarrollada como parte de una prueba técnica para el puesto de Fullstack Developer. Utiliza **React** para el frontend y **Laravel** para el backend, proporcionando una interfaz interactiva para gestionar tareas y categorías. La aplicación permite crear, actualizar y eliminar tareas, así como clasificarlas por categorías.

## Tecnologías Utilizadas

- **Frontend**: React
- **Backend**: Laravel 10
- **Base de Datos**: MySQL
- **Dependencias Adicionales**: Axios para la comunicación entre el frontend y el backend

## Funcionalidades Principales

### 1. Crear Tareas
- Permite al usuario agregar nuevas tareas con un título y una categoría asociada.
- Cada tarea tiene un estado inicial: **Pendiente** o **Completada**.

### 2. Listar Tareas
- Muestra una lista de todas las tareas.
- Cada tarea muestra su título y su estado actual, con el texto de las tareas completadas en rojo y tachado.

### 3. Actualizar Tareas
- Los usuarios pueden editar el título de una tarea existente.
- Los usuarios también pueden marcar una tarea como **Completada** o **Pendiente**.

### 4. Eliminar Tareas
- Permite eliminar tareas de la lista.

### 5. Crear y Eliminar Categorías
- Los usuarios pueden crear nuevas categorías para clasificar las tareas.
- Los usuarios también pueden eliminar categorías, lo que resultará en la eliminación de todas las tareas asociadas.

## Instalación y Configuración

### 1. Clonar el Repositorio
Clona el repositorio desde GitHub utilizando el siguiente comando:

```sh
git clone https://github.com/Alej48041/Apptodo.git
```

### 2. Backend (Laravel)
- Dirígete a la carpeta `backend` del proyecto:
  ```sh
  cd backend
  ```
- Instala las dependencias de Laravel:
  ```sh
  composer install
  ```
- Configura el archivo `.env` con los detalles de tu base de datos:
  ```env
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=todolist
  DB_USERNAME=root
  DB_PASSWORD=
  ```
- Genera la clave de la aplicación de Laravel:
  ```sh
  php artisan key:generate
  ```
- Ejecuta las migraciones para crear las tablas en la base de datos:
  ```sh
  php artisan migrate
  ```
- Inicia el servidor de desarrollo de Laravel:
  ```sh
  php artisan serve
  ```

### 3. Frontend (React)
- Dirígete a la carpeta `frontend` del proyecto:
  ```sh
  cd frontend
  ```
- Instala las dependencias de React:
  ```sh
  npm install
  ```
- Inicia el servidor de desarrollo de React:
  ```sh
  npm start
  ```

## Uso
Una vez que tanto el servidor de backend como el de frontend estén corriendo, abre tu navegador y dirígete a `http://localhost:3000`. Deberías ver la interfaz de la aplicación **To-Do List**, donde puedes agregar, actualizar, completar o eliminar tareas, así como gestionar categorías.

## Notas Adicionales
- Asegúrate de que el backend corra en `http://127.0.0.1:8000` para evitar problemas de **CORS**.
- En el archivo `api.js` del frontend, asegúrate de que `baseURL` esté configurada correctamente para apuntar al servidor de Laravel.

## Problemas Conocidos
- **Error 419 Page Expired**: Asegúrate de excluir las rutas de API de la verificación CSRF si encuentras este error.
- **Error 422 Unprocessable Content**: Revisa la validación de los datos enviados al backend, especialmente en las solicitudes `PUT` para actualizar tareas.



