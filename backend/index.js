const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
//creamos servidor
const app = express();

//Conectamos con la BD
conectarDB();
app.use(cors())

//Habilitamos que podamos recibir json
app.use(express.json());

//Asignamos a cada ruta su routes
app.use('/api', require('./routes/running'));



app.listen(4000, () => {
    console.log('El servidor esta ON');
})