const express = require("express")
const routerMatematicas = express.Router();
const {getCursosMatematicas, temaMatematicas, addCursoMatematicas,
     updateCursosMatematicas, deleteCursosMatematicas } = require("../controller/busquedaCursos")


routerMatematicas.get("/matematicas", getCursosMatematicas)
routerMatematicas.get("/matematicas/:tema", temaMatematicas)
routerMatematicas.post("/matematicas", addCursoMatematicas)
routerMatematicas.put("/matematicas/:id", updateCursosMatematicas)
routerMatematicas.delete("/matematicas/:id", deleteCursosMatematicas)


module.exports = routerMatematicas