// impotar expres
const express = require ("express");
const app = express();

const routerMatematicas = require("./routes/routesMatematicas");
const routerProgramacion = require("./routes/routesProgramacion");

const {primerServidor, getCursos} = require("./controller/busquedaCursos")

app.use(express.json());

app.use("/api/cursos/", routerMatematicas);
app.use("/api/cursos/", routerProgramacion);

app.get("/api/cursos", getCursos);
app.get("/", primerServidor)
 



const PUERTO = 3000;

app.listen(PUERTO, () => {
 console.log(`Servidor corriendo en el puerto:${PUERTO}`)
});


