

# 📚 API de Cursos de Programación (CRUD)


Este es un sistema backend desarrollado con Node.js y Express que permite gestionar un catálogo de cursos de programación. El proyecto implementa las operaciones básicas de un CRUD (Crear, Leer, Actualizar y Eliminar) utilizando rutas modulares.


## 

### 🛠️ Tecnologías Utilizadas

* Node.js: Entorno de ejecución para JavaScript.
* Express: Framework para la creación de la API REST.
* Nodemon: Herramienta de desarrollo para reinicio automático del servidor.


### 🚀 Instalación y Configuración

 Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:

 git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

2. Instala las dependencias: 

npm install

3. Inicia el servidos:

npm start
   




## 🔌 Endpoints de la API

La API utiliza el prefijo base /api/cursos/ para todas sus operaciones

## 💻  Cursos de Programación (/programacion)

| Método | Endpoint | Descripción |
| :---   | :---:    | :---        |
| GET  | /programacion | Obtiene todos los cursos de programación |
| GET | /programacion/:lenguaje | Filtra cursos por lenguaje (ej: /javascript) |
|    POST      |   /programacion         |    Agrega un nuevo curso       |
|      PUT    |      /programacion/:id      |  Actualiza un curso existente por ID.     |
|    DELETE   |   /programacion/:id  |Elimina un curso del registro por ID.                    |

## 🔢 Cursos de Matemáticas (/matematicas)


| Método | Endpoint | Descripción |
| :---   | :---:    | :---        |
| GET  | /matematicas | Obtiene todos los cursos de matematicas |
| GET | /programacion/:tema | Filtra cursos por lenguaje (ej: /calculo) |
|    POST      |   /matematicas     |    Agrega un nuevo curso       |
|      PUT    |      /matematicas/:id      |  Actualiza un curso existente por ID.     |
|    DELETE   |   /matematicas/:id  |Elimina un curso del registro por ID.


## 🌐 Rutas Adicionales

1. GET /: Punto de entrada (Servidor activo).

2. GET /api/cursos: Obtiene el listado global de todas las categorías.


## 📝 Ejemplo de Body (POST/PUT)

Para enviar datos a la API, utiliza el siguiente esquema JSON:

{

  "id": 5,

  "titulo": "Estructuras de Datos con Python",

  "lenguaje": "python",

  "nivel": "intermedio"

}



##

##



