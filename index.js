const express = require('express');
const app = express();
const path = require("path")
const db = require("./database/connection")
const bodyParser = require("body-parser")
//const admin = require("./routes/admin")
require('./models/Departamento');
const Departamento = db.model("departamentos");
const router = express.Router();
//const bodyParser = require("body-parser")

    //Public static
    app.use(express.static(path.join(__dirname,"/public")))

     //Body Parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    //rotas admin
    //app.use('/admin', admin)

    app.get("/", (req,res)=>{
        res.json({ message: "Hello API"});
    })

    app.post("/departamento/novo", async (req,res)=>{
        const novoDepartamento = await {
            nome: req.body.nome
        }
        new Departamento(novoDepartamento).save().then(()=>{
            res.status(201).json({message: 'Departamento criado com sucesso!'});
        }).catch((error) =>{
            res.status(500).json({erro : error });
        })
    })

    app.get("/departamentos", async (req,res)=>{
        try{
            const people = await Departamento.find();
            res.status(200).json(people);
        }catch(error){
            res.status(500).json({erro: error})
        }
        
    })

    app.get("/departamentos/:id", async(req, res)=>{
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

    app.patch("/departamento/:id", async(req,res)=>{
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




    

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`app running on url http://localhost:${PORT}`);
})