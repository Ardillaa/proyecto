const CarreraOrganizador = require("../models/CarreraOrganizador");
const Organizador = require("../models/Organizador");

exports.addCarreraOrganizador = async (req, res) => {
    let carreraOrganizador;
    try {

        req.body.forEach(element => {
        

                carreraOrganizador = new CarreraOrganizador(element);
        
                carreraOrganizador.save();
                
        
            
        })
        res.send(req.body);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en addCarreraOrganizador');
    }
}

exports.getCarreraOrganizador = async (req, res) => {
    
    try {
        
        const carreraOrganizador = await CarreraOrganizador.find();
        res.json(carreraOrganizador);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en GetCarreraOrganizador');
    }
}

exports.deleteCarreraOrganizador = async (req, res) => {
    
    try {
        console.log(req.body);
        let carreraOrganizador = await CarreraOrganizador.find({"idCarrera": req.body.idCarrera, "idOrganizador": req.body.idOrganizador});
        
        if(!carreraOrganizador){
            res.status(404).json({msg: 'No existe ese registro'})
        }else{

            carreraOrganizador.forEach(element=>{
                console.log(element._id.value);
             CarreraOrganizador.findOneAndRemove({_id: element._id});
            })

            res.json({msg:'El registro ha sido eliminado'});
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en deleteCarreraOrganizador');
    }
}

exports.getOrganizadores = async (req, res) => {
    
    try {

        var organizadores = [];
        //obtener las relaciones con idCarrera
        relacion = await CarreraOrganizador.find({idCarrera: req.params.idCarrera});
        //obtenemos todos los organizadores
        allOrganizadores = await Organizador.find();
        
        relacion.forEach(element => {
            allOrganizadores.forEach(organizador =>{
                if(element.idOrganizador == organizador._id){
                    organizadores.push(organizador);
                }
            });
            
        });

        //const organizadores = await Organizador.find();
        res.json(organizadores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en GetOrganizador');
    }
}

exports.getOrganizadoresSinAsignar = async (req, res) => {
    
    try {
        var encontrado = false;
        var organizadores = [];
        //obtener las relaciones con idCarrera
        relaciones = await CarreraOrganizador.find({idCarrera: req.params.idCarrera});
        //obtenemos todos los organizadores
        allOrganizadores = await Organizador.find();
        
        allOrganizadores.forEach(organizador => {
            relaciones.forEach(element =>{
                if(element.idOrganizador == organizador._id){
                    encontrado= true;
                }
            });
            if(encontrado==false){
                organizadores.push(organizador);
            }
            encontrado = false;
        });
        
        //const organizadores = await Organizador.find();
        res.json(organizadores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en GetOrganizador');
    }
}