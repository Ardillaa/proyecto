const Carrera = require("../models/Carrera");

exports.addCarrera = async (req, res) => {
    
    try {
        let carrera;

        //Creamos el usuario
        carrera = new Carrera(req.body);

        await carrera.save();
        res.send(carrera);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en addCarrera');
    }
}

exports.getCarreras = async (req, res) => {
    
    try {
        
        const carreras = await Carrera.find();
        res.json(carreras);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en GetCarreras');
    }
}

exports.editCarrera = async (req, res) => {
    
    try {
        
        const { nombre, cinicio, ciudad, fecha,numCorredores,numOrganizadores } = req.body;
        let carrera = await Carrera.findById(req.params.id);

        if(!carrera){
            res.status(404).json({msg: 'No existe el carrera'})
        }else{
            carrera.nombre = nombre;
            carrera.cinicio = cinicio;
            carrera.ciudad = ciudad;
            carrera.fecha = fecha;
            carrera.numCorredores = numCorredores;
            carrera.numOrganizadores = numOrganizadores;

            carrera = await Carrera.findOneAndUpdate({_id: req.params.id}, carrera, {new: true});
            res.json(carrera);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en EditCarrera');
    }
}

exports.getCarrera = async (req, res) => {
    
    try {
        
        let carrera = await Carrera.findById(req.params.id);

        if(!carrera){
            res.status(404).json({msg: 'No existe la carrera'})
        }else{
            
            res.json(carrera);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en getCarrera');
    }
}

exports.deleteCarrera = async (req, res) => {
    
    try {
        
        let carrera = await Carrera.findById(req.params.id);

        if(!carrera){ 
            res.status(404).json({msg: 'No existe la carrera'})
        }else{
            console.log(req.params.id);
            //await Carrera.findOneAndRemove({_id: req.params.id})
            //res.json({msg:'La carrera ha sido eliminado'});
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en getCarrera');
    }
}