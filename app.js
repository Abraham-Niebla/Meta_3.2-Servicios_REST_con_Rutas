const port = 4000; // Puerto de escucha

const express = require("express");

const app = express();
app.use(express.json());

// Importando funciones para aplicar los métodos HTTP
const activosRouter = require("./routers/activosRouter");
const responsablesRouter = require('./routers/responsablesRouter');
const ubicacionesRouter = require('./routers/ubicacionesRouter');

// Configurar la aplicación para usar los routers de cada recurso
app.use('/activos', activosRouter);
app.use('/responsables', responsablesRouter);
app.use('/ubicaciones', ubicacionesRouter);

/***** Poner al servidor en escucha *****/
app.listen(port, () => {
    console.log("Server escuchando en puerto ", port);
    console.log("http://localost:", port);
});