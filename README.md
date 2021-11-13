# Comics de Marvel

## Índice

* [1. Contexto](#1-contexto)
* [2. Proceso de diseño](#2-Proceso-de-diseño)
* [3. Mejoras del producto](#3-Mejoras-del-producto)
* [4. Instalación y configuración del proyecto](#4-Instalación-y-configuración-del-proyecto)
* [5. Patrón de arquitectura empleado en el desarrollo.](#5-patrón-de-arquitectura-empleado-en-el-desarrollo.)

## 1. Contexto 

**Comics de Marvel** es una aplicación web donde podrás ver toda la información sobre los cómics que a la largo de su historia **Marvel** ha publicado.

## 2. Proceso de diseño

Prototipo de alta para dispositivo desktop página inicial
<p align = "center"> <img src= "https://github.com/rosannyoropeza/comics-marvel/blob/master/src/assets/imagesFigma/Home.png"></p>

Prototipo de alta para dispositivo desktop login
<p align = "center"> <img src= "https://github.com/rosannyoropeza/comics-marvel/blob/master/src/assets/imagesFigma/Login.png"></p>

Prototipo de alta para dispositivo desktop Registrarse
<p align = "center"> <img src= "https://github.com/rosannyoropeza/comics-marvel/blob/master/src/assets/imagesFigma/Registrarse.png"></p>

Prototipo de alta para dispositivo desktop Comics
<p align = "center"> <img src= "https://github.com/rosannyoropeza/comics-marvel/blob/master/src/assets/imagesFigma/Comics.png"></p>

Prototipo de alta para dispositivo desktop Comics - Modal
<p align = "center"> <img src= "https://github.com/rosannyoropeza/comics-marvel/blob/master/src/assets/imagesFigma/Comics-modal.png"></p>

Prototipo de alta para dispositivo desktop Comics - perfil
<p align = "center"> <img src= "https://github.com/rosannyoropeza/comics-marvel/blob/master/src/assets/imagesFigma/Comics-perfil.png"></p>

[Enlace prototipo Figma](https://www.figma.com/file/s8zBnuAtmWJwI457Z7wqDs/PERSONAJES-DE-MARVEL?node-id=13%3A188)

## 3. Mejoras del producto
 
* Como pendiente quedaría crear la vista con la información del perfil de cada usuario.
* Agregar en los cómics favoritos una opción para eliminar las tarjetas.
* Agregar una función para ordenar los cómics de la A-Z y de la Z-A.
* Crear la opción de ver los personajes de Marvel.
## 4. Instalación y configuración del proyecto

1. <a href="https://nodejs.org/es/download/current/">Instalar  Node.js versión v13.11.0</a>
2. Abrir  la consola.
3. Realiza un  ***fork*** del repositorio ***https://github.com/rosannyoropeza/comics-marvel*** desde GitHub.
4. Ejecutar en la consola los siguientes comandos:

Para clonar el repositorio

```sh
git clone https://github.com/rosannyoropeza/comics-marvel.git
```

Para abrir la carpeta donde se guardó el proyecto

```sh
cd comics-marvel
```

Instale los módulos del proyecto.
```sh
npm install
```

Inicie el servidor web

```sh
npm start
```

5. Dirígete a http://localhost:3000 en tu navegador, para ver la interfaz del programa en el navegador. 

## 5. Patrón de arquitectura empleado en el desarrollo.

El patrón empleado fue el de capas ya que consta de:
 
*  Una capa de presentación, conformada por los componentes de React.
*  Una capa de aplicación, que sería la aplicación de la API de Marvel.
*  Y una capa de datos, que permitió el acceso a los datos guardados en Firebase para persistir a los favoritos del usuario mediante Firestore Database y la administración de los usuarios de la aplicación a través de Authentication de Firebase.




