// Framework para programar de una manera mas sencilla la aplicación web
import express from 'express';

// Las siguentes dependencias son para lograr tener el directorio absoluto (/home/cris0510/Documentos/HMTL5/Nodejs/src) sin tener que cambiar dependiendo del sistema operativo.
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

// Le asignamos el metodo express a una constante para usarla de manera mas sencilla
const app = express();
const PUERTO = 3000;

// Asignamos la url del directorio absoluto a una constante __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));
// Usamos join para unir la url de los directorios __dirname y views
console.log(join(__dirname, 'views'));

app.set('views', join(__dirname, 'views'));
// Ejs es un motor que te permite generar HTML e insertar código JavaScript del lado del cliente, y el view engine es para asignarle el motor de plantilla (en este caso "ejs", pero hay otros como "pug")
app.set('view engine', 'ejs');
// Usamos el res.render y no el res.send, por que queremos renderizar el archivo index.ejs de la carpeta views (no es necesario añadirle la extensión .ejs)
app.get('/', (req,res) => res.render('index'));

app.listen(PUERTO);
console.log(`Server is listening on port ${PUERTO}`);