## Documentacion de Jest

https://jestjs.io/es-ES/

## configuracion del proyecto

1. npm init -y (Esto creará un archivo package.json con la configuración básica.)

2. npm install --save-dev jest (instalacion de jest en el proyecto)

   npm install --save-dev @babel/core @babel/cli @babel/preset-env (Instalacion de Babel)

3. Crear un archivo .gitignore donde escribiras node_modules (esto hara que esa carpeta sea ignorada y no se suba a tu repositorio)

4. Actualizar el archivo package.json

"scripts": {
"test": "jest"
},

"babel":{
"presets": ["@babel/preset-env"]
},

## Flags

// --watch / --watchAll --> Permite que se mantenga la ejecucion de jest sin necesidad de escribir el comando npm run test cada vez

// --coverage / --> Nos muestra una tabla con infomacion de la cantidad de codigo que esta testeado y porcentaje de pruebas fallidas y exitosas

## Matchers

https://jestjs.io/es-ES/docs/using-matchers

---

## Video de Youtube - curso de Jest basico:

https://www.youtube.com/watch?v=tgWBQZNCOT0

## Configuracion con Babel - Se muestra en el video

npm install --save-dev babel-jest @babel/core @babel/cli @babel/preset-env

---

npm install --save-dev @babel/core @babel/cli @babel/preset-env

## Crear un archivo babelrc con el contenido que esta entre los comentarios:

--

{
    "presets": [["@babel/preset-env", {"targets": {"node": "current"}}]]
}

--

