const express = require('express')
require('../models/Departamento');
const db = require("../database/connection")
const Departamento = db.model("departamentos");
const router = express.Router();

router.get('/',(req,res)=>{
    /*
    #swagger.description = 'Retorna a rota principal admin'
    */

    res.json({title:'Data',content:'HomePage admin'});
})

router.post("/departamento/novo", async (req,res)=>{
    /*
    #swagger.description = 'Cria um departamento novo'
    */
    const novoDepartamento = await {
        nome: req.body.nome
    }
    new Departamento(novoDepartamento).save().then(()=>{
        res.status(201).json({message: 'Departamento criado com sucesso!'});
    }).catch((error) =>{
        res.status(500).json({erro : error });
    })
})

router.get("/departamentos", async (req,res)=>{
    /*
    #swagger.description = 'Lista todos os departementos'
    */
    try{
        const people = await Departamento.find();
        res.status(200).json(people);
    }catch(error){
        res.status(500).json({erro: error})
    }
    
})

router.get("/departamentos/:id", async(req, res)=>{
    /*
    #swagger.description = 'Lista um departamento pelo id'
    */
    const id = req.params.id;
    try{
        const departamento = await Departamento.findOne({_id: id});
        if(!departamento){
            res.status(422).json({message: 'Departamento não encontado verifique o ID!'})
            return
        }
        res.status(200).json(departamento);
    }catch(error){
        res.status(500).json({ erro: error});
    }
})

router.patch("/departamento/:id", async(req,res)=>{
    /*
    #swagger.description = 'Atualiza um único departamento'
    */
    const id = req.params.id;
    const { nome, dataCadastro } = req.body;
    const departamento = {
        nome, dataCadastro
    }

    try{
        const updateDepartamento = await Departamento.updateOne({ _id: id}, departamento);
        if(updateDepartamento.matchedCount === 0){
            res.status(422).json({message: "Departamento não encontrado!"});
            return
        }
        res.status(200).json(departamento);
    }catch(error){
        res.status(500).json({erro: error });
    }
})


module.exports = router