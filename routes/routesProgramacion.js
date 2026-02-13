const express = require("express");
const routerProgramacion = express.Router();

const {getCursosProgramacion, lenguajeProgramacion, addCursoProgramacion,
      updateCursosProgramacion, deleteCursosProgramacion} = require("../controller/busquedaCursos")


routerProgramacion.get("/programacion", getCursosProgramacion );
routerProgramacion.get("/programacion/:lenguaje", lenguajeProgramacion);
routerProgramacion.post("/programacion", addCursoProgramacion );
routerProgramacion.put("/programacion/:id", updateCursosProgramacion);
routerProgramacion.delete("/programacion/:id", deleteCursosProgramacion);


module.exports = routerProgramacion