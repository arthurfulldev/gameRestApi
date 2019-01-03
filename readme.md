# Node Rest Api Mysql

## General.
Este apliactivo consite en crear una aplicacion que se capaz de listar videojuegos, crear un videojuego, editar un videojuego y eliminar un videojuego.

## Objetivo.
Comprender y aplcar los conceptos básicos de una aplicacion rest api con node, mysql y angular.

## Herramientas:
+ Node 8.11.4
+ Angular-cli 6.2.1
+ promise-mysql@3.3.1
+ morgan@1.9.1
+ cors@2.8.5
+ express@4.16.4
+ Git

## Intalación y configuración.
1. Creación de carpeta ./server.
```
    cd server
    npm init --yes
    npm i express morgan promise-mysql cors
    tsc --init
```

2. Crear carpeta ./server/src
3. Crear archivo ./server/src/index.html
4. En el archivo tsconfig se deben configurar los siguientes parametros:
    * `ES5 -> ES6`
    * `"outDir":  [ruta_compilacion]`
5. Configuracion de nodemon como dependncia de desarrollo.
`npm i nodemon -D`
6. Configurar comandos de autoamatizacion en package.json
```
{
    ...
    "scripts": {
    "build": "tsc -w",
    "dev": "nodemon build/index.js"
  },
}
   
```
7. Instalación de @types/express como dependencia de desarrollo.
`npm i @types/express` 