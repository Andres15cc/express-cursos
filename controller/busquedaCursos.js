
const {infoCursos} = require("../cursos");

const primerServidor = (req, res) => {
 res.send("Mi primer servidor. Cursos .");
};

const getCursos =  (req, res) =>{
    res.send(infoCursos);
}

//Programacion

const getCursosProgramacion = (req, res) => {
    res.json(infoCursos.programacion);
};

const lenguajeProgramacion = (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if (resultados.length === 0) {
       return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    res.json(resultados)
};

const addCursoProgramacion = (req, res) => {
    let cursoNuevo = req.body;
    infoCursos.programacion.push(cursoNuevo);
    res.status(201).json(infoCursos.programacion);
      
};

const updateCursosProgramacion = (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = infoCursos.programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        infoCursos.programacion[indice] = cursoActualizado;
    }
    res.json(infoCursos.programacion)
};

const deleteCursosProgramacion = (req, res) => {
    const id  = req.params.id;
    const indice = infoCursos.programacion.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        infoCursos.programacion.splice(indice, 1);
    }
    res.json(infoCursos.programacion);

}

//Matematicas

const getCursosMatematicas =  (req, res) => {
    res.json(infoCursos.matematicas)
};

const temaMatematicas =  (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

    if (resultados.length === 0) {
       return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.json(resultados)
};

const addCursoMatematicas = (req, res) => {
    let cursoNuevo = req.body;
    infoCursos.matematicas.push(cursoNuevo);
    res.status(201).json(infoCursos.matematicas);
      
};

const updateCursosMatematicas = (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = infoCursos.matematicas.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        infoCursos.matematicas[indice] = cursoActualizado;
    }
    res.json(infoCursos.matematicas)
};

const deleteCursosMatematicas =(req, res) => {
    const id  = req.params.id;
    const indice = infoCursos.matematicas.findIndex(curso => curso.id == id);

    if (indice >= 0) {
        infoCursos.matematicas.splice(indice, 1);
    }
    res.json(infoCursos.matematicas);
};




module.exports = {
    getCursos,
    primerServidor,
    getCursosProgramacion,
    lenguajeProgramacion,
    addCursoProgramacion,
    updateCursosProgramacion,
    deleteCursosProgramacion,
    getCursosMatematicas,
    temaMatematicas,
    addCursoMatematicas,
    updateCursosMatematicas,
    deleteCursosMatematicas
}