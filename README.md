# Ducking Movies - React-Redux
<h4 align = center> Front-end para el proyecto final de Sistemas y Tecnologías Web - 1er semestre de 2020 </h4>
<h5 align = center>Desarrollado por Marco Fuentes y Andy Castillo, utilizando React Native</h5>

## Creación del proyecto

Este proyecto fue creado con expo, pensado para ser ejecutado en iPhones con al menos iOS 10.0

## Requisitos

1. *Node.js*: Tener instalada la última versión de [Node.js](https://nodejs.org/es/download/)
2. *Git*: Adicionalmente, usar git para gestionar el proyecto. [Descargar aqui](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)

## Instalación de expo

Es necesario contar con la versión reciente de expo para probar la aplicación. La instalación se puede hacer a través de `npm`:
```bash
  sudo npm install -g expo-cli
  # Para verificar que el proceso de instalación terminó con éxito:
  expo whoami
  › Not logged in, run expo login to authenticate
```

#### Usuarios de macOS
Es muy probable que se encuentren con problemas al intentar ejecutar la app. Instalar Watchman puede solucionar sus problemas: 
```bash
brew update
brew install watchman
```

Además, es necesario contar con la [App Expo en iOS](https://apps.apple.com/us/app/expo-client/id982107779)


## Para ejecutar la app

Esta app fué creada usando 
```bash
expo init
```
 Por tanto, una vez clonado este repositorio, navegar hacia la carpeta de la aplicacion y ejecutar:
 ```bash
  cd duckingmovies-reactredux/Ducking-Movies
  yarn install
  yarn start
 ```
 En el iphone, abrir la cámara, escanear el código QR que se muestra en la consola y abrirlo con Expo mostrará la aplicación funcionando.
