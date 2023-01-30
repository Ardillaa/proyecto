const Organizador = require("../models/Organizador");

exports.addOrganizador = async (req, res) => {
    
    try {
        let organizador;

        //Creamos el organizador
        organizador = new Organizador(req.body);
        await organizador.save();
        res.send(organizador);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en addOrganizador');
    }
}

exports.getOrganizadores = async (req, res) => {
    
    try {
        
        const organizadores = await Organizador.find();
        res.json(organizadores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en GetOrganizador');
    }
}

exports.editOrganizador = async (req, res) => {
    
    try {
        
        const { nombre, apellidos, ciudad, telefono ,dni,edad,vehiculo} = req.body;
        let organizador = await Organizador.findById(req.params.id);

        if(!organizador){
            res.status(404).json({msg: 'No existe el organizador'})
        }else{
            organizador.nombre = nombre;
            organizador.apellidos = apellidos;
            organizador.ciudad = ciudad;
            organizador.telefono = telefono;
            organizador.dni = dni;
            organizador.edad = edad;
            organizador.vehiculo = vehiculo;
            organizador = await Organizador.findOneAndUpdate({_id: req.params.id}, organizador, {new: true});
            res.json(organizador);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en EditOrganizador');
    }
}

exports.getOrganizador = async (req, res) => {
    
    try {
        
        let organizador = await Organizador.findById(req.params.id);

        if(!organizador){
            res.status(404).json({msg: 'No existe el organizador'})
        }else{
            
            res.json(organizador);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en getOrganizador');
    }
}

exports.deleteOrganizador = async (req, res) => {
    
    try {
        
        let organizador = await Organizador.findById(req.params.id);

        if(!organizador){
            res.status(404).json({msg: 'No existe el organizador'})
        }else{
            await Organizador.findOneAndRemove({_id: req.params.id})
            res.json({msg:'El organizador ha sido eliminado'});
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en getOrganizador');
    }
}