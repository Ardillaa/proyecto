//Rutas Base de datos
const express = require('express');
const router = express.Router();
const organizadorController = require('../controllers/organizadorController');
const carreraOrganizadorController = require('../controllers/carreraOrganizadorController');
const carreraController = require('../controllers/carreraController');

router.get('/carreras', carreraController.getCarreras);
router.post('/carreras/add', carreraController.addCarrera);
router.delete('/carreras/del/:id', carreraController.deleteCarrera);
router.get('/carreras/:id', carreraController.getCarrera);
router.put('/carreras/edit/:id', carreraController.editCarrera);

router.get('/organizador', organizadorController.getOrganizadores);
router.post('/organizador/add', organizadorController.addOrganizador);
router.delete('/organizador/del/:id', organizadorController.deleteOrganizador);
router.get('/organizador/:id', organizadorController.getOrganizador);
router.put('/organizador/edit/:id', organizadorController.editOrganizador);

router.post('/carreras/addOrganizadores', carreraOrganizadorController.addCarreraOrganizador);
router.get('/carreras/organizadores/:idCarrera', carreraOrganizadorController.getOrganizadores);
router.get('/carreras/organizadores/sin/:idCarrera', carreraOrganizadorController.getOrganizadoresSinAsignar);
router.delete('/carreras/organizadores/del/', carreraOrganizadorController.deleteCarreraOrganizador);


module.exports = router;