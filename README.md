# Ducking Movies - React-Redux

<h4 align = center> Front-end para el proyecto final de Sistemas y Tecnologías Web - 1er semestre de 2020 </h4>

<h5 align = center>Desarrollado por Marco Fuentes y Andy Castillo, utilizando React Native</h5>

## Creación del proyecto

Este proyecto fue creado con expo, pensado para ser ejecutado en iPhones con al menos iOS 10.0

## Requisitos

1. *Node.js*: Tener instalada la última versión de [Node.js](https://nodejs.org/es/download/)
2. *Git*: Adicionalmente, usar git para gestionar el proyecto. [Descargar aqui](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)
3. *ngrok*: Para conectarse al servidor usando HTTPS. [Vea el paso a paso](https://ngrok.com/)

## Instalación de expo

Es necesario contar con la versión reciente de expo para probar la aplicación. La instalación se puede hacer a través de `npm`:
```bash
  $ sudo npm install -g expo-cli
  # Para verificar que el proceso de instalación terminó con éxito:
  $ expo whoami
  › Not logged in, run expo login to authenticate
```

#### Usuarios de macOS
Es muy probable que se encuentren con problemas al intentar ejecutar la app. Instalar Watchman puede solucionar sus problemas: 
```bash
$ brew update
$ brew install watchman
```

Además, es necesario contar con la [App Expo en iOS](https://apps.apple.com/us/app/expo-client/id982107779)


## Para ejecutar la app

Una vez montado el **Django Server** y haber extraído **ngrok**, en una terminal, dirigirse a la carpeta en donde se extrajo **ngrok** y ejecutar: 
```bash
$ ./ngrok authtoken 1cdpsXS22xsx76Ii4kR0eDA9sda_4TFoP11xkwJzGntqK5kTN
# Esto proporciona acceso a los servicios de ngrok
$ ./ngrok http 8000 #8000 es el puerto por defecto de DJANGO. 
          # Si se especificó otro, ponerlo aqui.
```

Luego de esto, la consola mostratá una interfaz parecida a esta: 


```bash
ngrok by @inconshreveable                                       (Ctrl+C to quit)
                                                                                
Session Status                online                                            
Account                       user (Plan: Free)                       
Version                       2.3.35                                            
Region                        United States (us)                                
Web Interface                 http://127.0.0.1:4040                             
Forwarding                    http://dbe7655188a4.ngrok.io -> http://localhost:8000
Forwarding                    https://dbe7655188a4.ngrok.io -> http://localhost:8000
                                                                                
Connections                   ttl     opn     rt1     rt5     p50     p90       
                              5       0       0.00    0.00    30.64   32.18   
```

El último link de la segunda columna (en este caso, https://dbe7655188a4.ngrok.io) debe ser copiado e insertado en la linea 1 de `settings.js` como valor de la constante **ngrok_base**: 
`` 
const ngrok_base = 'https://dbe7655188a4.ngrok.io'
``

Luego, en otra consola, navegar hacia la carpeta de la aplicacion y ejecutar:
 ```bash
  cd duckingmovies-reactredux/Ducking-Movies
  yarn install
  yarn start
 ```
 En el iphone, abrir la cámara, escanear el código QR que se muestra en la consola y abrirlo con Expo mostrará la aplicación funcionando.
