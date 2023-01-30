const Usuario = require("../models/Usuario");

exports.addUsuario = async (req, res) => {
    console.log('Controlador running ... ');
    console.log(req.body);

    try {
        let usuario;

        //Creamos el usuario
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en running');
    }
}

exports.getUsuarios = async (req, res) => {
    
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en GetUsuarios');
    }
}

exports.editUsuario = async (req, res) => {
    
    try {
        
        const { nombre, apellidos, ciudad, telefono } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        }else{
            usuario.nombre = nombre;
            usuario.apellidos = apellidos;
            usuario.ciudad = ciudad;
            usuario.telefono = telefono;

            usuario = await Usuario.findOneAndUpdate({_id: req.params.id}, usuario, {new: true});
            res.json(usuario);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en EditUsuario');
    }
}

exports.getUsuario = async (req, res) => {
    
    try {
        
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        }else{
            
            res.json(usuario);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en getUsuario');
    }
}

exports.deleteUsuario = async (req, res) => {
    
    try {
        
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        }else{
            await Usuario.findOneAndRemove({_id: req.params.id})
            res.json({msg:'El usuario ha sido eliminado'});
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en getUsuario');
    }
}