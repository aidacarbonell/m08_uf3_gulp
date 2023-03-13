# M08 - UF03 - Gulp
Gulp és un sistema d'eines de JavaSript que s'utilitza com a sistema de compilació de transmissió en el desenvolupament web front-end
Es tracta d'un executor basat en NodeJs i npm, que s'utilitza per automatitzar tasques repetitives, com poden ser: moure arxius de carpetes, eliminar-los, minificar codi, validar sintaxi, etc

## Instal·lació
Per utilitzar gulp cal tenir instal·lat NodeJs i npm

```
$ npm install -g gulp
$ npm install --save-dev gulp
```
Comprovem la versió:
```
$ gulp -version
CLI version: 2.3.0
Local version: 4.0.2
```
## Configuració
Un cot ho tenim tot instal·lat procedim a inicialitzar npm
```
$ npm init
```
Per tal d'evitar conflictes, canviarem el _entry point_ per __gulpfile.js__
```
$ cat package.json
{
"name": "exercici",
"version": "1.0.0",
"description": "",
"main": "gulpfile.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "Aida Carbonell",
"license": "ISC"
}
```
Un cop inicialitzat s'ha de crear manualment el __gulpfile.js__

## Plugins
Gulp té moltíssims plugins que es poden utilitzar

Instal·lació: ```npm install gulp-[plugin]```

Ex:
```
npm install gulp-rename
```

I dins l'arxiu l'hem de cridar com qualsevol altre:
```javascript
var rename = require("gulp-rename");
```

A la documentació de cada plugin explica el seu funcionament

## Exercici:
- Explora la documentació de gulp i els seus plugins.
- Has de triar 5 plugins (els que vulguis, i creguis útils) i fer un exemple pràctic de cada un d'ells.
- Per cada plugin escriu dues línies sobre la seva funció, i per cada exercici explicar que fa

En un mateix exemple pots utilitzar més d'un plugin

No cal que siguin els exemples de la documentació, ja que en aquesta a vegades el codi és esquemàtic o falten documents als quals fa referència i no funciona realment, podeu buscar per internet el que vulgueu.

Els exemples que entregueu han de funcionar

Adjunto un exemple de com s'hauria de fer, podeu utilitzar els plugins que hi surten, però treballeu-vos-ho una mica i que l'exemple no sigui idèntic al que us mostro.