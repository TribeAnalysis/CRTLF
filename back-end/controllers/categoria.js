const Categoria = require('../models/Categoria')
const controller = {}//obj vazio para inserir as funções

//metodo novo() implementando o CREATE
controller.novo = async (req,res)=>{
    try{
        //envia os dados dentro de req.body para inserir no bd
        await Categoria.create(req.body)
        //http 201 : Criado
        res.status(201).end()
    }
    catch(erro){
        console.error(erro)
        //HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}
module.exports=controller