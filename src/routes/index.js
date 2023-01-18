// Router es solo una sección de expres, ya que no lo necesitamos todo, solo necesitamos poder enrutar

import { Router } from "express";
const router = Router();

// Usamos el res.render y no el res.send, por que queremos renderizar los archivos *.ejs de la carpeta views (no es necesario añadirle la extensión .ejs)
// El segundo argumento del render es un objeto que se puede usar en los archivos .ejs (ver /views), se pueden agregar mas de 1 con una coma (Tener en cuenta que siempre es llave y contenido).
router.get('/', (req, res) => res.render('index', { title: "First website with Node", m: "Mensaje NO extraño" }));

router.get('/about', (req, res) => res.render('about', { si: "Hola", m: "Mensaje extraño" }));

router.get('/contact', (req, res) => res.render('contact', { depende: "Aveces", m: "Mensaje extraño" }));

export default router;