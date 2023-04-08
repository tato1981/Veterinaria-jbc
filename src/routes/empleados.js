const express = require('express');
const empleadoSchema = require("../models/empleadomodels")
const router = express.Router();

//routes
//create empleado
router.post('/empleados', (req, res) =>{
    //res.send('crear empleado');
    const empleado = empleadoSchema(req.body);
    empleado
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});


//obtener todos los empleados
router.get('/empleados', (req, res) =>{
    //res.send('crear empleado');
    empleadoSchema    
    .find()  //.find = encontrar
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});


//encontrar un empleados
router.get('/empleados/:id', (req, res) =>{
    //res.send('crear empleado');
    const {id} = req.params;
    empleadoSchema    
    .findById(id)  //.findById = encontrar por el ID
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});


//actualizar un empleado
router.put('/empleados/:id', (req, res) =>{
    //res.send('crear empleado');
    const {id} = req.params;
    const {nombre, apellidos, dependencia, salario}= req.body;
    empleadoSchema    
    .updateOne({_id: id}, { $set:{nombre, apellidos, dependencia, salario}})  //.updateOne = actualizar un empleado
    .then((data) => res.json(data))
    .catch((error) => res.json( {message: error} ) )
});


//eliminarun empleado
router.delete('/empleados/:id', (req, res) =>{
    //res.send('crear empleado');
    const { id } = req.params;
    empleadoSchema    
    .deleteOne({ _id : id })  //.deliteOne = eliminar empleado por el ID
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});








module.exports = router